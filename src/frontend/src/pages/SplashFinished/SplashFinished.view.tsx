import * as React from 'react'
import { useState, useEffect, ChangeEvent, SyntheticEvent, } from 'react'
import * as PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'

import classnames from 'classnames';

import { PublicUser } from 'shared/user/PublicUser'
import { SignUpInputs } from 'shared/user/SignUp'
import { FormInputs, getErrorMessage, getInputStatus, updateFormFromBlur, updateFormFromChange, updateFormFromSubmit } from 'helpers/form'

import { Header } from 'app/App.components/Header/Header.controller'
import { MainFooter } from 'app/App.components/MainFooter/MainFooter.controller'
import { InputField } from 'app/App.components/Form/InputField/Input.controller'

import { BoxLogo, FormWrapp, Row, SplashFinishedContainer, SubTitle, Title, Wrapp, WrappForm, BtnContainer, BoxImgLeft, BoxImgRight, EmptyBlock } from './SplashFinished.style'
import { Button } from 'app/App.components/Button/Button.controller';
import { Link } from 'react-router-dom';

type SplashFinishedViewProps = {
  user?: PublicUser,
  signUpCallback: (values: any) => void
  loading: boolean
}

interface ISignUpSchema {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  referral: string,
}

export const SplashFinishedView = ({ user, loading, signUpCallback }: SplashFinishedViewProps) => {
  const history = useHistory()
  const [form, setForm] = useState<FormInputs>({
    username: { value: '' },
    email: { value: '' },
    password: { value: '' },
    confirmPassword: { value: '' },
    referral: { value: '' },
  })

  const setReferalLink = (url: string) => {
    setForm((prev) => ({ ...prev, referral: { value: url } }))
  }

  useEffect(() => {
    const url = window.location.href

    if (url.includes('?referral=')) {
      setReferalLink(url)
    }
  }, [])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const updatedForm = updateFormFromChange(e, form, SignUpInputs)
    setForm(updatedForm)
  }

  const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
    const updatedForm = updateFormFromBlur(e, form)
    setForm(updatedForm)
  }

  const handleSubmit = (event: SyntheticEvent) => {
    const updatedForm = updateFormFromSubmit(event, form, SignUpInputs)

    if (
      !updatedForm.username.error &&
      !updatedForm.email.error &&
      !updatedForm.password.error &&
      !updatedForm.confirmPassword.error
    )
      signUpCallback({
        username: updatedForm.username.value,
        email: updatedForm.email.value,
        password: updatedForm.password.value,
        confirmPassword: updatedForm.confirmPassword.value,
        referral: updatedForm.referral.value,
      })
    else setForm(updatedForm)
  }


  const getCertificate = () => {
    history.push(`/user/${user?.username}`)
  }

  return (
    <SplashFinishedContainer className={classnames(user && 'isUser')}>
      <Header authPage />
      <EmptyBlock />
      <Wrapp>
        <BoxLogo />
        <Title>Congratulations!</Title>
        {user ? (
          <BtnContainer className={'isUser'}>
            <Button text="Get your certificate" color="gradient" onClick={getCertificate} />
          </BtnContainer>
        ) : (
          <WrappForm>
            <SubTitle>
              Please, sign up to obtain your certificate:
            </SubTitle>
            <FormWrapp>
            <form onSubmit={handleSubmit}>
              <Row>
                <InputField
                  label="Username"
                  type="text"
                  value={form.username.value}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="username"
                  inputStatus={getInputStatus(form.username)}
                  errorMessage={getErrorMessage(form.username)}
                  isDisabled={false}
                />
              </Row>
              <Row>
                <InputField
                  label="Email"
                  type="text"
                  value={form.email.value}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="email"
                  inputStatus={getInputStatus(form.email)}
                  errorMessage={getErrorMessage(form.email)}
                  isDisabled={false}
                />
              </Row>
              <Row>
                <InputField
                  label="Password"
                  type="password"
                  value={form.password.value}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="password"
                  inputStatus={getInputStatus(form.password)}
                  errorMessage={getErrorMessage(form.password)}
                  isDisabled={false}
                />
              </Row>
              <Row>
                <InputField
                  label="Re-enter password"
                  type="password"
                  value={form.confirmPassword.value}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="confirmPassword"
                  inputStatus={getInputStatus(form.confirmPassword)}
                  errorMessage={getErrorMessage(form.confirmPassword)}
                  isDisabled={false}
                />
              </Row>
              <Row>
                <InputField
                  label="Referral"
                  type="text"
                  value={form.referral.value}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="referral"
                  inputStatus={getInputStatus(form.referral)}
                  errorMessage={getErrorMessage(form.referral)}
                  isDisabled={false}
                />
              </Row>
              <BtnContainer>
                <Button text="Sign up" color="gradient" type="submit" loading={loading} />
                <div className={'alreadyBox'}>
                  Already have an account? <Link to="/login">Log in</Link>
                </div>
              </BtnContainer>
            </form>
            </FormWrapp>
          </WrappForm>
        )}
      </Wrapp>
      <BoxImgLeft />
      <BoxImgRight />
      <MainFooter />
    </SplashFinishedContainer>
  )
}

SplashFinishedView.propTypes = {
  signUpCallback: PropTypes.func.isRequired,
  loading: PropTypes.bool,
}

SplashFinishedView.defaultProps = {
  loading: false,
}