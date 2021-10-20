import * as PropTypes from 'prop-types'
import * as React from 'react'

import {
  HamburgerBox,
  HamburgerInnerBottom,
  HamburgerInnerMiddle,
  HamburgerInnerTop,
  HamburgerStyledLeft
} from './Hamburger.style'

// direction: left true, right false
type HamburgerViewProps = {
  activated: boolean
  activateCallback: () => void
}

export const HamburgerViewLeft = ({ activated, activateCallback }: HamburgerViewProps) => (
  <HamburgerStyledLeft onClick={() => activateCallback()}>
    <HamburgerBox>
      <HamburgerInnerTop className={`${activated}`} />
      <HamburgerInnerMiddle />
      <HamburgerInnerBottom className={`${activated}`} />
    </HamburgerBox>
  </HamburgerStyledLeft>
)


HamburgerViewLeft.propTypes = {
  activated: PropTypes.bool,
  activateCallback: PropTypes.func,
}

HamburgerViewLeft.defaultProps = {
  activated: false,
}

