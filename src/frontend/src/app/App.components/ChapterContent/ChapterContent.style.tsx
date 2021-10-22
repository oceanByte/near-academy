import styled from 'styled-components/macro'
import { near3, progressColorGreen, subTextColor, textColor, textColorBlue, textColorWhite } from 'styles'

export const ChapterStyled = styled.div`
  max-width: 960px;
  width: 100%;
`

export const Progress = styled.div`
  width: 120px;
  height: 5px;
  background-color: ${progressColorGreen};
`

export const ChapterContentWrapp = styled.div`
  max-width: 751px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px 60px;

  @media (min-width: 1130px) {
    padding-left: 30px;
  }

  @media (max-width: 998px) {
    padding: 0 20px;
  }
`
export const Chapter = styled.div`
  font-size: 20px;
  line-height: 30px;
  text-transform: uppercase;
  color: ${subTextColor};
  text-align: center;
  margin-top: 48px;

  .imgCheckedBox {
    display: none;
  }

  @media (max-width: 998px) {
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 38px;

    .imgCheckedBox {
      display: block;
      margin-left: 12px;
      width: 25px;
      height: 20px;
      background-image: url('/images/chapter/checked.svg');
      background-repeat: no-repeat;
      background-position: center center;
    }
  }
`
export const Title = styled.h1`
  margin: 0;
  width: 100%;
  font-weight: bold;
  font-size: 48px;
  line-height: 58px;
  text-align: center;
  color: ${near3};
  margin-top: 13px;

  @media (max-width: 998px) {
    color: ${textColorBlue};
    font-size: 36px;
    line-height: 48px;
  }
`
export const MainContent = styled.div`
  font-size: 17px;
  line-height: 25px;
  color: ${textColor};
`
export const SubTitle = styled.div`
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  color: ${subTextColor};
  margin-top: 41px;
`
export const SubTitleMobile = styled(SubTitle)`
  display: none;

  @media (max-width: 998px) {
    display: block;
    text-align: center;
    margin-top: 36px;
  }
`
export const Text = styled.p`
  margin-top: 25px;

  span {
    font-weight: bold;
  }

  @media (max-width: 998px) {
    margin-top: 16px;
  }
`
export const FactWrapp = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 44px;

  @media (max-width: 998px) {
    margin-top: 34px;
  }
`
export const ImgBox = styled.div`
  width: 40px;
  height: 40px;
  background-image: url('/images/chapter/light.png');
  background-repeat: no-repeat;
  background-position: center center;
  margin-right: 10px;
`
export const Fact = styled.div`
  font-style: italic;
  font-weight: normal;
  font-size: 17px;
  line-height: 25px;
  color: rgba(65, 41, 116,.8);
  max-width: 702px;
  width: 100%;
`
export const ExcersiseWrapp = styled.div`
  background: #DBEAFE;
  border-radius: 12px;
  padding: 32px 14px 42px;
  margin-top: 50px;
`

export const ExcersiceTitle = styled.div`
  width: 100%;
  text-align: center;
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  color: ${subTextColor};
  &::before {
    content: '';
    width: 40px;
    height: 40px;
    background-image: url('/images/chapter/pointer.png');
    background-repeat: no-repeat;
    background-position: center center;
    padding-left: 50px;
  }
`
export const Code = styled.div`
  margin-top: 18px;
  background: #091E44;
  border-radius: 5px;
  padding: 10px;
  font-family: 'DM Mono', monospace;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 22px;
  color: ${textColorWhite};
  

  @media (max-width: 600px) {
    overflow-x: scroll;
    /* width: 310px; */

    div {
      width: 400px;
      padding-right: 5px;
    }
  }

  span {
    color: ${textColorBlue};
  }
`