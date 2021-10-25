//prettier-ignore
import * as React from 'react'
import ReactDOM from 'react-dom'
import { useEffect, useState } from 'react'

import { useHistory } from 'react-router-dom'
import { useMediaQuery } from '@react-hook/media-query'
import Editor, { ControlledEditor, monaco } from '@monaco-editor/react'
import * as PropTypes from 'prop-types'

import useIsMounted from 'ismounted'
import Markdown from 'markdown-to-jsx'

// @ts-ignore
import Highlight from 'react-highlight.js'

import { Header } from 'app/App.components/Header/Header.controller'
import { Progress } from './Progress/Progress.controller'
import { Checkboxes } from 'app/App.components/Checkboxes/Checkboxes.controller'
import { Dialog } from 'app/App.components/Dialog/Dialog.controller'
import { Popup } from 'app/App.components/Popup/Popup.controller'
import { Button } from '../../app/App.components/Button/Button.controller'
import { ButtonsShowResult } from '../../app/App.components/ButtonsShowResult/ButtonsShowResult.controller'
import { FormSevenChapter } from '../../app/App.components/FormSevenChapter/FormSevenChapter.controller'
import { Input } from '../../app/App.components/Input/Input.controller'
import { Question } from './Chapter.controller'

import { PublicUser } from 'shared/user/PublicUser'
import { backgroundColorLight } from 'styles'

import { PENDING, RIGHT, WRONG } from './Chapter.constants'

//prettier-ignore
import {
  ChapterContainer,
  ChapterContentWrapp,
  ChapterCourse,
  ChapterFixed,
  ChapterH1,
  ChapterH2,
  ChapterH3,
  ChapterH4,
  ChapterItalic,
  ChapterMonaco,
  ChapterQuestions,
  ChapterStyled,
  ChapterTab,
  QuoteContainer,
  HiddenBlock,
  MonacoContainer,
  narrativeText,
  Spacer,
  SubTitleMobile,
  TextWrapper,
  VerticalAlign,
  BottomItems,
  Wrapp,
  AnimatedCode,
  BackgroundContainer,
  Difficulty,
  ImageContainer,
  SpecialCode
} from './Chapter.style'


monaco
  .init()
  .then((monacoInstance) => {
    monacoInstance.editor.defineTheme('myCustomTheme', {
      base: 'vs',
      inherit: true,
      rules: [
        { token: 'comment', foreground: '#029b3a', fontStyle: 'italic' },
        { token: 'keyword', foreground: '#0e15e1' },
        { token: 'number', foreground: '#038c2a' },
        { token: 'string', foreground: '#910303' },
      ],
      colors: {
        'editor.foreground': '#7b7b7b',
        'editor.background': backgroundColorLight,
        'editor.selectionBackground': '#DDF0FF33',
        'editor.lineHighlightBackground': '#FFFFFF08',
        'editorCursor.foreground': '#A7A7A7',
        'editorWhitespace.foreground': '#FFFFFF40',
      },
    })
  })
  .catch((error) => console.error('An error occurred during initialization of Monaco: ', error))

const MonacoReadOnly = ({ children }: any) => {
  const height = children.split('\n').length * 22
  return (
    <div style={{ marginTop: '10px' }}>
      <Editor
        height={height}
        value={children}
        language="typescript"
        theme="vs-dark"
        options={{
          lineNumbers: false,
          scrollBeyondLastLine: false,
          minimap: { enabled: false },
          scrollbar: { vertical: 'hidden', verticalScrollbarSize: 0, alwaysConsumeMouseWheel: false },
          folding: false,
          readOnly: true,
          fontSize: 14,
          fontFamily: 'Proxima Nova',
          wordWrap: true,
        }}
      />
    </div>
  )
}

const MonacoEditorSupport = ({ support, height }: any) => {
  return (
    <div>
      <Editor
        height={height}
        value={support}
        language="rust"
        theme="vs-dark"
        options={{
          lineNumbers: true,
          scrollBeyondLastLine: false,
          minimap: { enabled: false },
          scrollbar: { vertical: 'hidden', verticalScrollbarSize: 0 },
          folding: true,
          readOnly: true,
          fontSize: 14,
          fontFamily: 'Proxima Nova',
          wordWrap: true,
        }}
      />
    </div>
  )
}

const MonacoEditor = ({ proposedSolution, proposedSolutionCallback, width, height }: any) => {
  return (
    <div>
      <ControlledEditor
        height={height ? height : '600px'}
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

// Provides user with feedback after incorrect exploration
let triggerAnim = function () {
  const myTry = document.getElementById('try')!
  myTry.classList.remove('tryagain')
  void myTry.offsetWidth
  myTry.classList.add('tryagain')
}

const Content = ({ course }: any) => (
  <Markdown
    children={course}
    options={{
      // disableParsingRawHTML: true,
      overrides: {
        ChapterContainer: {
          component: ChapterContainer,
        },
        QuoteContainer: {
          component: QuoteContainer,
        },
        h1: {
          component: ChapterH1,
        },
        h2: {
          component: ChapterH2,
        },
        h3: {
          component: ChapterH3,
        },
        h4: {
          component: ChapterH4,
        },
        code: {
          component: MonacoReadOnly,
        },
        em: {
          component: ChapterItalic,
        },
        AnimatedCode: {
          component: AnimatedCode,
        },
        dialog: {
          component: Dialog,
        },
        Button: {
          component: Button,
        },
        Input: {
          component: Input,
        },
        Highlight: {
          component: Highlight,
        },
        Difficulty: {
          component: Difficulty,
        },
        ImageContainer: {
          component: ImageContainer,
        },
        SpecialCode: {
          component: SpecialCode,
        },
        Spacer: {
          component: Spacer,
        },
        narrativeText: {
          component: narrativeText,
        },
        TextWrapper: {
          component: TextWrapper,
        },
        BackgroundContainer: {
          component: BackgroundContainer,
        },
        VerticalAlign: {
          component: VerticalAlign,
        },
        SubTitleMobile: {
          component: SubTitleMobile,
        },
        // FormSevenChapter: {
        //   component: FormSevenChapter
        // }
      },
    }}
  />
)

type ChapterViewProps = {
  validatorState: string
  validateCallback: () => void
  solution: string
  nextChapter: string
  previousChapter: string
  proposedSolution: string
  proposedSolutionCallback: (e: string) => void
  showDiff: boolean
  isPopup: boolean
  closeIsPopup: () => void
  course?: string
  user?: PublicUser
  supports: Record<string, string | undefined>
  questions: Question[]
  proposedQuestionAnswerCallback: (e: Question[]) => void,
  percent: number
}

export const ChapterView = ({
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
  previousChapter,
  proposedQuestionAnswerCallback,
  percent
}: ChapterViewProps) => {
  const history = useHistory()
  const [display, setDisplay] = useState('solution')
  const [editorWidth, setEditorWidth] = useState(0)
  const [editorHeight, setEditorHeight] = useState(0)
  const [isSaveConfirmPopup, setIsSaveConfirmPopup] = useState<any>(null)
  const matches = useMediaQuery('(max-width: 998px)')

  useEffect(() => {
    if (nextChapter === '/near101/chapter-2' && localStorage.getItem('popupConfirm')) {
      setIsSaveConfirmPopup(false)
    } else setIsSaveConfirmPopup(true)
  }, [])

  let extension = '.rs'

  const closePopupSaveProcess = () => {
    setIsSaveConfirmPopup(false)
    localStorage.setItem('popupConfirm', 'true')
  }

  const rootElement = document.getElementById('root') as HTMLElement

  const PopupPortal = ReactDOM.createPortal(
    <Popup
      closePopup={closePopupSaveProcess}
      buttonTextClose={'Continue without account'}
      buttonText={'Sign up'}
      img={'/images/chap_5_0.png'}
      isImage={false}
      link={'/login'}
      title={''}
      text={'Create an account to save your progress and earn your certificate'}
    />,
    rootElement,
  )

  const nextStep = () => {
    if (validatorState === RIGHT) {
      history.push(nextChapter)
    }
  }
  const backStep = () => {
    history.push(previousChapter)
  }

  return (
    <div>
      {nextChapter === '/near101/chapter-2' && !user && isSaveConfirmPopup ? PopupPortal : null}
      {isPopup ? (
        <Popup
          closePopup={closeIsPopup}
          buttonText={nextChapter !== '/sign-up' ? 'Next Chapter' : 'Get certificate'}
          buttonTextClose={'Close'}
          link={nextChapter}
          img={'/icons/dog.svg'}
          isImage={true}
          title={'Success'}
          text={'Congratulations'}
        />
      ) : null}
      <ChapterStyled>
        <ChapterCourse>
          <Header inChapter />
          <Progress percent={percent} />
          <ChapterContentWrapp>
            <Content course={course || ''} />
          </ChapterContentWrapp>
        </ChapterCourse>
        <HiddenBlock />
        <ChapterFixed>
          {Object.keys(supports).length > 0 && (
            <div>
              <ChapterTab isSelected={display === 'solution'} onClick={() => setDisplay('solution')}>
                Exercice
              </ChapterTab>
              {Object.keys(supports).map((key, index) => (
                <ChapterTab isSelected={display === key} onClick={() => setDisplay(key)}>
                  {`${key}.${extension}`}
                </ChapterTab>
              ))}
            </div>
          )}
          {questions.length > 0 && nextChapter !== '/near101/chapter-8' ? (
            <Wrapp>
              <div>
                <ChapterQuestions>
                  {questions.map((question, i) => (
                    <div key={question.question}>
                      {question.selectedText ? (
                        <h2>{question.question} <span>question.selectedText</span>:</h2>
                      ) : (<h2>{question.question}</h2>)}
                      <Checkboxes
                        items={question.answers}
                        onUpdate={(selected) => {
                          const proposedQuestions = questions
                          proposedQuestions[i].proposedResponses = selected
                          proposedQuestionAnswerCallback(proposedQuestions)
                        }}
                      />
                    </div>
                  ))}
                </ChapterQuestions>
              </div>
              <BottomItems>
                <ButtonsShowResult
                  isBack
                  validatorState={validatorState}
                  validateCallback={validateCallback}
                  nextStep={nextStep}
                  backStep={backStep}
                />
              </BottomItems>
            </Wrapp>
          ) : (
            <div>
              {display === 'solution' ? (
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
              ) : (
                <ChapterMonaco>
                  <MonacoEditorSupport height={editorHeight} support={supports[display]} />
                </ChapterMonaco>
              )}
            </div>
          )}
        </ChapterFixed>
      </ChapterStyled>
    </div>
  )
}

ChapterView.propTypes = {
  validatorState: PropTypes.string,
  validateCallback: PropTypes.func.isRequired,
  solution: PropTypes.string,
  nextChapter: PropTypes.string,
  proposedSolution: PropTypes.string,
  showDiff: PropTypes.bool.isRequired,
  isPopup: PropTypes.bool,
  closeIsPopup: PropTypes.func,
  proposedSolutionCallback: PropTypes.func.isRequired,
  course: PropTypes.string,
  supports: PropTypes.object.isRequired,
  questions: PropTypes.array.isRequired,
}

ChapterView.defaultProps = {
  validatorState: PENDING,
  solution: '',
  proposedSolution: '',
}
