import styled from 'styled-components/macro'

export const EditorStyled = styled.div`
  max-width: 960px;
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;

  @media (max-width: 1800px) {
    max-width: 860px;
  }
  @media (max-width: 1700px) {
    max-width: 760px;
  }
  @media (max-width: 1600px) {
    max-width: 660px;
  }

  @media (max-width: 1300px) {
    max-width: 560px;
  }
  @media (max-width: 1100px) {
    max-width: 500px;
  }

  @media (max-width: 998px) {
    max-width: 100%;
    margin: 0 auto;
    position: static;
  }
`

export const MonacoContainer = styled.div`
  position: relative;

  .btnContainer {
    position: absolute;
    bottom: 30px;
    right: 40px;
    z-index: 999;

    @media (max-width: 998px) {
      position: static;
    }
  }

  .monaco-editor.rename-box {
    display: none;
  }

  .monaco-editor, .monaco-editor-background {
    background-color: #071C43;
  }
  .monaco-editor .margin{
    background-color: #071C43;
  }
`

export const ChapterLocked = styled.div`
  height: calc(100vh - 130px);
  margin: 70px 20px 0;
`
