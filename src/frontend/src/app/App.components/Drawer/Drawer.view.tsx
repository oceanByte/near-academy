import * as PropTypes from 'prop-types'
import * as React from 'react'
import { Link } from 'react-router-dom'
// import { PublicUser } from 'pages/Course/Course.data'
import { PublicUser } from 'shared/user/PublicUser'

import { ChapterData } from '../../../pages/Chapter/Chapter.controller'
import { chaptersByCourse } from '../../../pages/Course/Course.data'
import { Button } from '../Button/Button.controller'
import { MainFooter } from '../MainFooter/MainFooter.controller'
// PLACEHOLDER.
import { Option } from '../Select/Select.view'
import { DrawerItem, DrawerMask, DrawerStyled, DrawerStyledLogin } from './Drawer.style'

type ChapterDrawerViewProps = {
  showingChapters: boolean
  hideCallback: () => void
  pathname: string
  changeCourseCallback: (e: Option) => void
  activeCourse: Option
}

type LoginDrawerViewProps = {
  showingMenu: boolean
  user: PublicUser
  hideCallback: () => void
  removeAuthUserCallback: () => void
}

type LoggedInDrawerViewProps = {
  showingMenu: boolean
  user: PublicUser
  removeAuthUserCallback: () => void
}

type LoggedOutDrawerViewProps = {
  showingMenu: boolean
}

export const ChapterDrawerView = ({
  showingChapters,
  hideCallback,
  pathname,
  activeCourse,
  changeCourseCallback,
}: ChapterDrawerViewProps) => (
  <>
    <DrawerMask className={`${showingChapters}`} onClick={() => hideCallback()} />
    <DrawerStyled className={`${showingChapters}`}>
      <div className={'top'}>
        <div className={'arrow-box'} onClick={() => hideCallback()}>
          <img src="/images/sideMenu/arrow.svg" alt="" />
        </div>
        <div className={'name-box'} />
      </div>
      <div className={'logo-sideMenu'}>
        <img src="/images/sideMenu/logo.png" alt="" />
      </div>
      <div className={'title-box'}>
        <h1 className={'title'}>Chapters</h1>
      </div>
      

      {/* <Select
        options={[
          { name: 'Near101', path: 'near101' },
          { name: 'Near102', path: 'near102' },
        ]}
        defaultOption={activeCourse}
        selectCallback={(e) => changeCourseCallback(e)}
      /> */}

      {chaptersByCourse[activeCourse.path].map((chapter: ChapterData, key: number) => (
        <DrawerItem key={chapter.pathname} className={pathname === chapter.pathname ? 'current-path' : 'other-path'}>
          <Link className={ key+1 < 5 ? 'checked': ''} to={chapter.pathSplash} onClick={() => hideCallback()}>
            <span className={'number'}>{key + 1}</span>
            <span className={'name-link'}>{chapter.name}</span>
          </Link>
        </DrawerItem>
      ))}

      <div className={'btn-items'}>
        <div className={'btn-item'}>
          <Link to="/sign-up">
            <Button text="Sign up for free" color="gradient" onClick={() => hideCallback()} />
          </Link>
        </div> 
        <div className={'btn-item'}>
          <Link to="/login">
            <Button text="Log in" color="primary" onClick={() => hideCallback()} />
          </Link>
        </div> 
      </div>
      <MainFooter mobileFooter />
    </DrawerStyled>
  </>
)

export const LoginDrawerView = ({ showingMenu, user, hideCallback, removeAuthUserCallback }: LoginDrawerViewProps) => (
  <>
    <DrawerMask className={`${showingMenu}`} onClick={() => hideCallback()} />
    {user ? loggedInDrawer({ showingMenu, user, removeAuthUserCallback }) : loggedOutDrawer({ showingMenu })}
  </>
)

function loggedInDrawer({ showingMenu, user, removeAuthUserCallback }: LoggedInDrawerViewProps) {
  return (
    <DrawerStyledLogin className={`${showingMenu}`}>
      <h1>Menu</h1>
      <DrawerItem>
        <Link to="/terms">TERMS</Link>
      </DrawerItem>

      <DrawerItem>
        <Link to={`/user/${user?.username}`}>{user?.username}</Link>
      </DrawerItem>

      <DrawerItem>
        <Link
          to="/"
          onClick={() => {
            removeAuthUserCallback()
          }}
        >
          LOGOUT
        </Link>
      </DrawerItem>
    </DrawerStyledLogin>
  )
}

function loggedOutDrawer({ showingMenu }: LoggedOutDrawerViewProps) {
  return (
    <DrawerStyledLogin className={`${showingMenu}`}>
      <h1>Menu</h1>
      <DrawerItem>
        <Link to="/terms">TERMS</Link>
      </DrawerItem>

      <DrawerItem>
        <Link to="/sign-up">SIGN UP</Link>
      </DrawerItem>

      <DrawerItem>
        <Link to="/login">LOGIN</Link>
      </DrawerItem>
    </DrawerStyledLogin>
  )
}

ChapterDrawerView.propTypes = {
  showingChapter: PropTypes.bool,
  hideCallback: PropTypes.func.isRequired,
  pathname: PropTypes.string.isRequired,
  changeCourseCallback: PropTypes.func.isRequired,
  activeCourse: PropTypes.object.isRequired,
}

ChapterDrawerView.defaultProps = {
  showingChapter: false,
}

LoginDrawerView.propTypes = {
  showingMenu: PropTypes.bool,
  user: PropTypes.object,
  hideCallback: PropTypes.func.isRequired,
  removeAuthUserCallback: PropTypes.func.isRequired,
}

LoginDrawerView.defaultProps = {
  showingMenu: false,
  user: undefined,
}
