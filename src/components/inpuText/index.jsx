// src/components/inpuText/InputText.jsx
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import 'material-symbols/outlined.css';
import { formatCPF, formatCNPJ } from '../../utils/masks';
import { isValidCpf, isValidCnpj, isValidEmail, isValidCode } from '../../utils/validation';
import * as S from './styles';

export default function InputText({
  label,
  placeholder,
  width = '363px',
  type = 'text',
  maskType = null,
  validateType = null,
  value: propValue,
  onChange: propOnChange,
  status = 'default',
  ...rest
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [internalValue, setInternalValue] = useState('');
  const isPassword = type === 'password';

  const applyMask = (digits) => {
    if (maskType === 'cpf') {
      return formatCPF(digits);
    }
    if (maskType === 'cnpj') {
      return formatCNPJ(digits);
    }
    return digits;
  };

  const getOnlyDigits = (str) => str.replace(/\D/g, '');

  useEffect(() => {
    if (propValue !== undefined) {
      if (maskType === 'cpf' || maskType === 'cnpj') {
        const onlyDigits = getOnlyDigits(propValue);
        const formatted = applyMask(onlyDigits);
        setInternalValue(formatted);
      } else {
        setInternalValue(propValue);
      }
    }
  }, [propValue, maskType]);

  const handleChange = (e) => {
    const raw = e.target.value;
    if (maskType === 'cpf' || maskType === 'cnpj') {
      const onlyDigits = getOnlyDigits(raw);
      const formatted = applyMask(onlyDigits);
      setInternalValue(formatted);
      if (propOnChange) {
        propOnChange(onlyDigits);
      }
    } else {
      setInternalValue(raw);
      if (propOnChange) {
        propOnChange(raw);
      }
    }
  };

  const handleBlur = () => {
    if (validateType === 'cpf' && !isValidCpf(internalValue)) {
      if (propOnChange) {
        propOnChange(internalValue, { error: 'CPF inválido' });
      }
    }
    if (validateType === 'cnpj' && !isValidCnpj(internalValue)) {
      if (propOnChange) {
        propOnChange(internalValue, { error: 'CNPJ inválido' });
      }
    }
    if (validateType === 'email' && !isValidEmail(internalValue)) {
      if (propOnChange) {
        propOnChange(internalValue, { error: 'Email inválido' });
      }
    }
    if (validateType === 'code' && !isValidCode(internalValue)) {
      if (propOnChange) {
        propOnChange(internalValue, { error: 'Código inválido' });
      }
    }
  };

  const handleToggle = () => setShowPassword((prev) => !prev);

  return (
    <S.Container>
      <S.Label status={status}>{label}</S.Label>
      <S.InputWrapper width={width}>
        <S.StyledInput
          status={status}
          type={isPassword && showPassword ? 'text' : type}
          placeholder={placeholder}
          value={internalValue}
          onChange={handleChange}
          onBlur={handleBlur}
          width={width}
          {...rest}
        />
        {isPassword && (
          <S.ToggleButton type="button" onClick={handleToggle}>
            <S.Icon>{showPassword ? 'visibility_off' : 'visibility'}</S.Icon>
          </S.ToggleButton>
        )}
      </S.InputWrapper>
    </S.Container>
  );
}

InputText.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  width: PropTypes.string,
  type: PropTypes.oneOf(['text', 'email', 'password', 'code']),
  maskType: PropTypes.oneOf(['cpf', 'cnpj', null]),
  validateType: PropTypes.oneOf(['cpf', 'cnpj', 'email', null]),
  value: PropTypes.string,
  onChange: PropTypes.func,
  status: PropTypes.oneOf(['default', 'error']),
};

InputText.defaultProps = {
  placeholder: '',
  width: '363px',
  type: 'text',
  maskType: null,
  validateType: null,
  value: '',
  onChange: undefined,
  status: 'default',
};
