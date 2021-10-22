import * as React from 'react'
import * as PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'

import { State } from 'reducers'
import { logout } from 'pages/Login/Login.actions'

import { HeaderView } from './Header.view'

interface IHeader {
  inChapter?: boolean
}

export const Header = ({ inChapter }: IHeader) => {
  const dispatch = useDispatch()
  const user = useSelector((state: State) => state.auth.user)

  function removeAuthUserCallback() {
    dispatch(logout())
  }

  return <HeaderView
    user={user}
    removeAuthUserCallback={removeAuthUserCallback}
    inChapter={inChapter}
  />
}

Header.propTypes = {
  inChapter: PropTypes.bool,
};
