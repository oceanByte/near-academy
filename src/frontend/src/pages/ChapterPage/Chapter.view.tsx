import * as React from 'react'
import { useLocation } from 'react-router-dom'

import { Chapter } from '../../app/App.components/ChapterContent/ChapterContent.controller'
import { EditorWrapp, } from 'app/App.components/Editor/editor.controller'
import { ConceptsWeb } from 'app/App.components/ConceptsWeb/ConceptsWeb.controller'

import { ChapterStyled, HiddenBlock } from './Chapter.style'
import { Error404 } from 'pages/Error404/Error404.controller'



export const ChapterPageView: any = () => {
  let title;
  let chapter;
  const { pathname } = useLocation();

  switch (pathname) {
    case '/near101/chapter-1':
      title="Welcome to the Internet of Value"
      chapter="Chapter 1"
      break;
    case '/near101/chapter-2':
      title="Key Concepts of Web3"
      chapter="Chapter 2"
      break;
  
    default:
      break;
  }
  return (
    <ChapterStyled>
      {pathname === '/near101/chapter-1' ? (
        <>
          <Chapter title="Welcome to the Internet of Value" chapter="Chapter 1" />
          <HiddenBlock />
          <EditorWrapp />
        </>
      ) : pathname === '/near101/chapter-2' ? (
        <>
          <Chapter title="Key Concepts of Web3" chapter="Chapter 2" />
          <HiddenBlock />
          <ConceptsWeb />
        </>
      ) : <Error404 />}
      
    </ChapterStyled>
  )
}
