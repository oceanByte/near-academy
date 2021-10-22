import styled from 'styled-components/macro'
import { backgroundColorChapter, near3, textColorWhite } from 'styles'

export const ConceptsStyled = styled.div`
  background-color: ${backgroundColorChapter};
  width: 100%;
  max-width: 960px;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  padding: 80px 30px 0 85px;

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
    position: relative;
    height: 700px;
    padding: 48px 30px;
  }

`
export const Wrapp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100%;
`
export const Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: ${textColorWhite};
  width: 100%;
  
  span {
    color: ${near3};
    font-weight: 700;
  }
`
export const ListItems = styled.div`
  margin-top: 42px;
`
export const ChapterQuestions = styled.div`
  
`

export const Item = styled.div`
  color: ${textColorWhite};
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 20px;
  margin-top: 22px;
`



export const BottomItems = styled.div`
  display: flex;
`