import styled from 'styled-components/macro'

export const ChapterStyled = styled.div`
  display: flex;

  @media (max-width: 998px) {
    flex-direction: column;
  }

`
export const HiddenBlock = styled.div`
  width: 100%;
  @media (max-width: 998px) {
    display: none;
  }
`


