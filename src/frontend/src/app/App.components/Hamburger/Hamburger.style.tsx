import styled from 'styled-components/macro'


// prettier-ignore
import { HamburgerBottomBackward, HamburgerBottomForward, HamburgerTopBackward, HamburgerTopForward, textColor } from '../../../styles'

export const HamburgerStyledLeft = styled.div`
  margin-right: 17px;
  height: 17px;
  box-sizing: content-box;
  cursor: pointer;
`

export const HamburgerBox = styled.div`
  position: relative;
  display: inline-block;
  width: 24px;
  height: 14px;
`

export const HamburgerInner = styled.div`
  position: absolute;
  width: 24px;
  height: 1px;
  border-radius: 1px;
  will-change: transform;
  background-color: ${textColor};
`

export const HamburgerInnerTop = styled(HamburgerInner)`
  top: 0;

  &.true {
    animation: ${HamburgerTopForward} 1s linear;
    animation-fill-mode: forwards;
  }

  &.false {
    animation: ${HamburgerTopBackward} 1s linear;
    animation-fill-mode: forwards;
  }
`

export const HamburgerInnerMiddle = styled(HamburgerInner)`
  display: block;
  top: calc(50% - 1px);
`

export const HamburgerInnerBottom = styled(HamburgerInner)`
  bottom: 1px;

  &.true {
    animation: ${HamburgerBottomForward} 1s linear;
    animation-fill-mode: forwards;
  }

  &.false {
    animation: ${HamburgerBottomBackward} 1s linear;
    animation-fill-mode: forwards;
  }
`
