import * as React from 'react'
import { ControlledEditor } from '@monaco-editor/react'
import { useHistory } from 'react-router-dom'
import { useMediaQuery } from '@react-hook/media-query'

import { EditorStyled, MonacoContainer } from './editor.style'
import { PublicUser } from 'shared/user/PublicUser'
import { Question } from './editor.controller'
import { RIGHT } from './editor.constants'
import { ButtonsShowResult } from '../ButtonsShowResult/ButtonsShowResult.controller'


const MonacoEditor = ({ proposedSolution, proposedSolutionCallback, width, height }: any) => {
  return (
    <div>
      <ControlledEditor
        height={height}
        width={width}
        value={proposedSolution}
        language="rust"
        theme="vs-dark"
        onChange={(_, val) => proposedSolutionCallback(val)}
        options={{
          lineNumbers: true,
          scrollBeyondLastLine: false,
          minimap: { enabled: false },
          scrollbar: { vertical: 'hidden', verticalScrollbarSize: 0 },
          folding: true,
          readOnly: false,
          fontSize: 14,
          fontFamily: 'Proxima Nova',
          wordWrap: true,
        }}
      />
    </div>
  )
}


type ChapterViewProps = {
  validatorState: string
  validateCallback: () => void
  solution: string | undefined 
  nextChapter: string
  proposedSolution: string | undefined
  proposedSolutionCallback: (e: string) => void
  showDiff: boolean
  isPopup: boolean
  closeIsPopup: () => void
  course?: string
  user?: PublicUser
  supports: Record<string, string | undefined>
  questions: Question[]
  proposedQuestionAnswerCallback: (e: Question[]) => void
}

export const EditorView = ({
  validatorState,
  validateCallback,
  solution,
  isPopup,
  closeIsPopup,
  proposedSolution,
  proposedSolutionCallback,
  showDiff,
  course,
  user,
  supports,
  questions,
  nextChapter,
  proposedQuestionAnswerCallback,
}: ChapterViewProps) => {
  const history = useHistory()

  const matches = useMediaQuery('(max-width: 998px)')

  const nextStep = () => {
    if (validatorState === RIGHT) {
      history.push(nextChapter)
    }
  }
  return (
    <EditorStyled>
      <div>
        <MonacoContainer>
          <div className={'btnContainer'}>
            <ButtonsShowResult
              validatorState={validatorState}
              validateCallback={validateCallback}
              nextStep={nextStep}
            />
          </div>
          <MonacoEditor
            height={matches? '800px' : '100vh'}
            proposedSolution={proposedSolution}
            proposedSolutionCallback={proposedSolutionCallback}
          />
        </MonacoContainer>
      </div>
    </EditorStyled>
  )
}
