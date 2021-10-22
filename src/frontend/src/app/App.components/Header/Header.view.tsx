import * as PropTypes from 'prop-types'
import * as React from 'react'
import {Link} from 'react-router-dom'
import {PublicUser} from 'shared/user/PublicUser'

import {HamburgerLeft} from '../Hamburger/Hamburger.controller'
// prettier-ignore
import {HeaderLoggedIn, HeaderLoggedOut, HeaderLogo, HeaderMenuItem, HeaderStyled, LeftContainer} from "./Header.style";
import {Button} from "../Button/Button.controller";

type HeaderViewProps = {
    user?: PublicUser
    removeAuthUserCallback: () => void,
    inChapter?: boolean,
}

interface ILoggedOutHeader {
    inChapter?: boolean,
}

// Overall Navbar
export const HeaderView = ({user, removeAuthUserCallback, inChapter}: HeaderViewProps) => {
    return (
        <HeaderStyled className={inChapter? 'inChapter' : ''}>
            <LeftContainer>
                <HamburgerLeft/>
                <Link to="/">
                    <HeaderLogo alt="logo" width="179px" src="/logo.svg"/>
                </Link>
            </LeftContainer>
            {user ? loggedInHeader({user, removeAuthUserCallback, inChapter}) : loggedOutHeader({inChapter})}
        </HeaderStyled>
    )
}

function loggedOutHeader({inChapter}: ILoggedOutHeader) {
  return (
    <HeaderLoggedOut>
        <div className={inChapter? 'inChapter' : 'nav-wrapp'}>
            <Link className={'get-started'} to="/near101/chapter-1">
                <Button text="Start learning" color="primary"/>
            </Link>
            {/*<Link to="/terms">*/}
            {/*  <HeaderMenuItem>TERMS</HeaderMenuItem>*/}
            {/*</Link>*/}
            <Link to="/sign-up">
                <HeaderMenuItem>Sign up</HeaderMenuItem>
            </Link>
            <Link to="/login">
                <HeaderMenuItem>Log in</HeaderMenuItem>
            </Link>
        </div>
    </HeaderLoggedOut>
  )
}

function loggedInHeader({user, removeAuthUserCallback, inChapter}: HeaderViewProps) {
    return (
        <HeaderLoggedIn>
            {/*<Link to="/terms">*/}
            {/*    <HeaderMenuItem>TERMS</HeaderMenuItem>*/}
            {/*</Link>*/}
            <div className={inChapter? 'inChapter' : 'nav-wrapp'}>
                <Link to={`/user/${user?.username}`}>
                    <HeaderMenuItem>{user?.username}</HeaderMenuItem>
                </Link>
                <Link
                    to="/"
                    onClick={() => {
                        removeAuthUserCallback()
                    }}
                >
                    <HeaderMenuItem>LOGOUT</HeaderMenuItem>
                </Link>
            </div>
        </HeaderLoggedIn>
    )
}

HeaderView.propTypes = {
    user: PropTypes.object,
    removeAuthUserCallback: PropTypes.func.isRequired,
}

HeaderView.defaultProps = {}
