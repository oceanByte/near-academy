import * as React from 'react'
import { useHistory } from 'react-router-dom'
import { ButtonsShowResult } from '../ButtonsShowResult/ButtonsShowResult.controller'
import { Checkboxes } from '../Checkboxes/Checkboxes.controller'
import { RIGHT } from '../Editor/editor.constants'
import { BottomItems, ConceptsStyled, Item, ListItems, Title, Wrapp, ChapterQuestions } from './ConceptsWeb.style'

export type Question = {
  question: string
  answers: string[]
  responses: string[]
  proposedResponses?: string[]
}

type ConceptsWebViewProps = {
  validatorState: string,
  nextChapter: string,
  validateCallback: () => void
  questions: Question[]
  proposedQuestionAnswerCallback: (e: Question[]) => void
}

export const ConceptsWebView = ({
  questions,
  validatorState,
  nextChapter,
  validateCallback,
  proposedQuestionAnswerCallback,
}: ConceptsWebViewProps) => {
  const history = useHistory()
  const nextStep = () => {
    if (validatorState === RIGHT) {
      history.push('/sign-up')
    }
  }
  const backStep = () => {
    history.push('/near101/chapter-1')
  }

  return (
    <ConceptsStyled>
      <Wrapp>
        <div>
          <Title>
            Select all available jobs from <span>decentrajob.testnet</span>:
          </Title>
          <ListItems>
            <ChapterQuestions>
              {questions.map((question, i) => (
                <div key={question.question}>
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
          </ListItems>
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
    </ConceptsStyled>
  )
}