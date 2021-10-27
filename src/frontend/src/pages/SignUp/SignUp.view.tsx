import { Button } from 'app/App.components/Button/Button.controller'
import { InputField } from 'app/App.components/Form/InputField/Input.controller'
import { Input } from 'app/App.components/Input/Input.controller'
import { InputSpacer } from 'app/App.components/Input/Input.style'
//prettier-ignore
import { FormInputs, getErrorMessage, getInputStatus, updateFormFromBlur, updateFormFromChange, updateFormFromSubmit } from 'helpers/form'
import * as PropTypes from 'prop-types'
import * as React from 'react'
import { ChangeEvent, SyntheticEvent, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { SignUpInputs } from 'shared/user/SignUp'

import { BtnContainer, Row, SignUpCard, SignUpStyled, SignUpTitle } from './SignUp.style'

type SignUpViewProps = {
  signUpCallback: (values: any) => void
  loading: boolean
}

export const SignUpView = ({ signUpCallback, loading }: SignUpViewProps) => {
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

  return (
    <SignUpStyled>
      <SignUpTitle>
        <h1>Sign Up</h1>
      </SignUpTitle>
      <SignUpCard>
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
          </BtnContainer>
        </form>
        <div className={'alreadyBox'}>
          Already have an account? <Link to="/login">Log in</Link>
        </div>
      </SignUpCard>
    </SignUpStyled>
  )
}

SignUpView.propTypes = {
  signUpCallback: PropTypes.func.isRequired,
  loading: PropTypes.bool,
}

SignUpView.defaultProps = {
  loading: false,
}
