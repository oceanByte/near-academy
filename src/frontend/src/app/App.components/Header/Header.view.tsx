import * as PropTypes from 'prop-types'
import * as React from 'react'
import {Link} from 'react-router-dom'
import classnames from 'classnames'

import {PublicUser} from 'shared/user/PublicUser'

import {HamburgerLeft} from '../Hamburger/Hamburger.controller'
// prettier-ignore
import {HeaderLoggedIn, HeaderLoggedOut, HeaderLogo, HeaderMenuItem, HeaderStyled, LeftContainer} from "./Header.style";
import {Button} from "../Button/Button.controller";

type HeaderViewProps = {
    user?: PublicUser
    removeAuthUserCallback: () => void,
    inChapter?: boolean,
    authPage?: boolean,
}

interface ILoggedOutHeader {
    inChapter?: boolean,
    authPage?: boolean,
}

// Overall Navbar
export const HeaderView = ({user, removeAuthUserCallback, inChapter, authPage}: HeaderViewProps) => {
    return (
        <HeaderStyled className={classnames(
                inChapter && 'inChapter',
                authPage && 'authPage'
            )}>
            <LeftContainer>
                <HamburgerLeft authPage={authPage} />
                <Link to="/">
                    {authPage ? (
                        <HeaderLogo alt="logo" width="179px" src="/images/splash/logo-white.svg"/>
                    ) : (
                        <HeaderLogo alt="logo" width="179px" src="/logo.svg"/>
                    )}
                    
                </Link>
            </LeftContainer>
            {user ? loggedInHeader({user, removeAuthUserCallback, inChapter}) : loggedOutHeader({inChapter, authPage})}
        </HeaderStyled>
    )
}

function loggedOutHeader({inChapter, authPage}: ILoggedOutHeader) {
  return (
    <HeaderLoggedOut>
        <div className={
            classnames(
                'nav-wrapp',
                inChapter && 'inChapter',
                authPage && 'authPage'
            )}>
            <Link className={'get-started'} to="/near101/splash-1">
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
