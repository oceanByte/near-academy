import * as React from 'react'
import * as PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { State } from 'reducers'

import { CourseData } from '../../../pages/Course/Course.controller'
import { chaptersByCourse, courseData } from '../../../pages/Course/Course.data'
import { chapterData } from '../../../pages/Courses/near101/Chapters/Chapters.data'

import { ConceptsWebView } from './ConceptsWeb.view'
import { PENDING, RIGHT, WRONG } from '../Editor/editor.constants'

import { addProgress } from '../Editor/editor.actions'

export interface ChapterData {
  pathname: string
  name: string
  data: Data
}

export interface Data {
  course: string | undefined
  exercise: string | undefined
  solution: string | undefined
  supports: Record<string, string | undefined>
  questions: Question[]
}

export type Question = {
  question: string
  answers: string[]
  responses: string[]
  proposedResponses?: string[]
}


interface IChapter {
  title: string,
  chapter: string,
}

export const ConceptsWeb: any = () => {
  const { pathname } = useLocation();
  const [validatorState, setValidatorState] = useState(PENDING);
  const [data, setData] = useState<Data>({
    course: undefined,
    exercise: undefined,
    solution: undefined,
    supports: {},
    questions: [],
  });
  const dispatch = useDispatch()
  const user = useSelector((state: State) => state.auth.user)
  let previousChapter = '/'
  let nextChapter = '/'
  let percent = 0

  useEffect(() => {
    /* if (user) dispatch(getUser({ username: user.username })) */

    courseData.forEach((course: CourseData) => {
      const index = course.path!
      chaptersByCourse[index].forEach((chapter: ChapterData) => {
        if (pathname === chapter.pathname)
          setData({
            course: chapter.data.course,
            exercise: chapter.data.exercise,
            solution: chapter.data.solution,
            supports: chapter.data.supports,
            questions: chapter.data.questions.map((question) => {
              return { ...question, proposedResponses: [] }
            }),
          })
      })
    })
  }, [pathname])

  chapterData.forEach((chapter, i) => {
    if (pathname === chapter.pathname) {
      if (i - 1 >= 0) previousChapter = chapterData[i - 1].pathname
      percent = 0
      if (i + 1 < chapterData.length) {
        nextChapter = chapterData[i + 1].pathname
      } else {
        if (user) nextChapter = `/user/${user.username}`
        else nextChapter = '/sign-up'
      }
      if (i !== 7) percent = ((i + 1) / chapterData.length) * 100
      else percent = 100
    }
  })

  const validateCallback = () => {
    if (data.questions.length > 0) {
      let ok = true
      data.questions.forEach((question) => {
        if (!question.proposedResponses) ok = false
        else {
          question.responses.forEach((response) => {
            if (!(question.proposedResponses && question.proposedResponses.indexOf(response) >= 0)) ok = false
          })
          question.proposedResponses.forEach((proposedResponse) => {
            if (!(question.responses.indexOf(proposedResponse) >= 0)) ok = false
          })
        }
        if (question.responses.length === 0) ok = true
      })
      if (ok) {
        setValidatorState(RIGHT)
        /* setIsPopup(true) */
        if (user) dispatch(addProgress({ chapterDone: pathname }))
        /* else dispatch(showToaster(SUCCESS, 'Register to save progress', 'and get your completion certificate')) */
      } else setValidatorState(WRONG)
    }
  }

  const proposedQuestionAnswerCallback = (e: Question[]) => {
    // @ts-ignore
    setData({ ...data, questions: e })
  }

  return (
    <ConceptsWebView
      validatorState={validatorState}
      validateCallback={validateCallback}
      questions={data.questions}
      proposedQuestionAnswerCallback={proposedQuestionAnswerCallback}
      nextChapter={nextChapter}
    />
  )
}