import styled from "styled-components/macro";
import { backgroundColorChapter } from "styles";

export const Wrapp = styled.div`
  display: flex;
  min-height: 100vh;
`
export const ImgContainer = styled.div`
  max-width: 722px;
  width: 100%;
  background-image: url('/images/auth/bg-image.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;

  @media (max-width: 1200px) {
    display: none;
  }
`

export const CloseBtn = styled.div`
  position: absolute;
  top: 23px;
  right: 40px;
  width: 24px;
  height: 24px;
  background-image: url('/images/splash/closeBtn.png');
  background-repeat: no-repeat;
  background-position: center center;
  cursor: pointer;
  z-index: 99;
  
  @media (max-width: 1200px) {
    display: none;
  }
`
export const FormContainer = styled.div`
  width: 100%;
  background-color: ${backgroundColorChapter};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`