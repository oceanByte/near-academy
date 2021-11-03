import { Button } from 'app/App.components/Button/Button.controller'
import { InputField } from 'app/App.components/Form/InputField/Input.controller'
//prettier-ignore
import { FormInputs, getErrorMessage, getInputStatus, updateFormFromBlur, updateFormFromChange, updateFormFromSubmit } from 'helpers/form'
import * as PropTypes from 'prop-types'
import * as React from 'react'
import { ChangeEvent, SyntheticEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import { LoginInputs } from 'shared/user/Login'

import { BtnContainer, LoginCard, LoginStyled, LoginTitle, Row } from './Login.style'

type LoginViewProps = {
  loginCallback: (values: any) => void
  loading: boolean
}

export const LoginView = ({ loginCallback, loading }: LoginViewProps) => {
  const [form, setForm] = useState<FormInputs>({
    usernameOrEmail: { value: '' },
    password: { value: '' },
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const updatedForm = updateFormFromChange(e, form, LoginInputs)
    setForm(updatedForm)
  }

  const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
    const updatedForm = updateFormFromBlur(e, form)
    setForm(updatedForm)
  }

  const handleSubmit = (event: SyntheticEvent) => {
    const updatedForm = updateFormFromSubmit(event, form, LoginInputs)

    if (!updatedForm.usernameOrEmail.error && !updatedForm.password.error)
      loginCallback({
        usernameOrEmail: updatedForm.usernameOrEmail.value,
        password: updatedForm.password.value,
      })
    else setForm(updatedForm)
  }

  return (
    <LoginStyled>
      <LoginTitle>
        <h1>Login</h1>
      </LoginTitle>
      <LoginCard>
      <form onSubmit={handleSubmit}>
          <Row>
            <InputField
              label="Username"
              type="text"
              value={form.usernameOrEmail.value}
              onChange={handleChange}
              onBlur={handleBlur}
              name="usernameOrEmail"
              inputStatus={getInputStatus(form.usernameOrEmail)}
              errorMessage={getErrorMessage(form.usernameOrEmail)}
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
            <div className={'forgot-password'}>
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>
          </Row>
          <BtnContainer>
            <Button text="Login" color="gradient" type="submit" loading={loading} />
          </BtnContainer>
        </form>
        <div className={'alreadyBox'}>
          Don’t have an account? <Link to="/sign-up">Sign up</Link>
        </div>
      </LoginCard>
    </LoginStyled>
  )
}

LoginView.propTypes = {
  loginCallback: PropTypes.func.isRequired,
  loading: PropTypes.bool,
}

LoginView.defaultProps = {
  loading: false,
}
