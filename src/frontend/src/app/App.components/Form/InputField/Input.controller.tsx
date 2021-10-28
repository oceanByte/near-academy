import * as PropTypes from 'prop-types'
import * as React from 'react'

import { InputView } from './Input.view'

type InputProps = {
  label: string
  name: string
  value?: string
  onChange: any
  onBlur: any
  type: string
  inputStatus?: 'success' | 'error'
  isDisabled?: boolean | undefined
  errorMessage?: string
  isName?: boolean | undefined
}

export const InputField = ({
  label,
  name,
  value,
  onChange,
  onBlur,
  type,
  inputStatus,
  isDisabled,
  errorMessage,
  isName
}: InputProps) => {
  return (
    <InputView
      label={label}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      inputStatus={inputStatus}
      isDisabled={isDisabled}
      errorMessage={errorMessage}
      isName={isName}
    />
  )
}

InputField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  type: PropTypes.string,
  inputStatus: PropTypes.string,
  isDisabled: PropTypes.bool,
  errorMessage: PropTypes.string,
}

InputField.defaultProps = {
  label: undefined,
  name: undefined,
  value: undefined,
  inputStatus: undefined,
  type: 'text',
}
