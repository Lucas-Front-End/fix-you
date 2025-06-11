import { useState } from 'react';
import { Controller } from 'react-hook-form';
import { formatCPF, formatCNPJ, formatDateBR } from '../../utils/masks';
import * as S from './styles';
import { isValidCpf, isValidCnpj, isValidEmail, isValidDateBR, isOfMinAge } from '../../utils/validation';

export default function InputCustom({
  control,
  name,
  label,
  placeholder,
  errorMessage,
  minAge,
  type = 'text',
  options = [],
  disabled = false,
  margin,
  contrato,
  ...rest
}) {
  const [focused, setFocused] = useState(false);

  const validators = {
    cpf: (value) => isValidCpf(value) || 'CPF inválido',
    cnpj: (value) => isValidCnpj(value) || 'CNPJ inválido',
    email: (value) => isValidEmail(value) || 'E-mail inválido',
    date: (value) => {
      if (!isValidDateBR(value)) return 'Data inválida';
      if (minAge && !isOfMinAge(value, minAge)) return `Mínimo de ${minAge} anos.`;
      return true;
    },
  };

  const getFormattedValue = (value) => {
    if (type === 'cpf') return formatCPF(value);
    if (type === 'cnpj') return formatCNPJ(value);
    if (type === 'date') return formatDateBR(value);
    return value;
  };

  const validationRules = {
    validate: (value) => {
      if (disabled || contrato === 'clt') return true; // <- pára aqui se for CLT
      if (!value) return 'Obrigatório';
      if (validators[type]) return validators[type](value);
      return true;
    },
  };

  return (
    <S.Container margin={margin}>
      <S.Label hasError={!!errorMessage}>{label}</S.Label>
      <Controller
        control={control}
        name={name}
        rules={validationRules}
        render={({ field: { onChange, onBlur, value } }) =>
          type === 'select' ? (
            <S.StyledSelect
              onChange={(e) => onChange(e.target.value)}
              onBlur={onBlur}
              value={value || ''}
              hasError={!!errorMessage}
              focused={focused.toString()}
              disabled={disabled}
              onFocus={() => setFocused(true)}
              onBlurCapture={() => setFocused(false)}
              {...rest}
            >
              <option value="" disabled>
                Selecione
              </option>
              {options.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </S.StyledSelect>
          ) : (
            <S.StyledInput
              type={type === 'date' ? 'text' : type}
              placeholder={placeholder}
              value={value || ''}
              onChange={(e) => {
                let inputValue = e.target.value;
                if (type === 'cpf' || type === 'cnpj' || type === 'date') {
                  const raw = inputValue.replace(/\D/g, '');
                  if (type === 'cpf') inputValue = raw.slice(0, 11);
                  if (type === 'cnpj') inputValue = raw.slice(0, 14);
                  if (type === 'date') inputValue = raw.slice(0, 8);
                }

                onChange(getFormattedValue(inputValue));
              }}
              onBlur={onBlur}
              hasError={!!errorMessage}
              focused={focused.toString()}
              disabled={disabled}
              onFocus={() => setFocused(true)}
              onBlurCapture={() => setFocused(false)}
              {...rest}
            />
          )
        }
      />
      {errorMessage && <S.ErrorText>{errorMessage}</S.ErrorText>}
    </S.Container>
  );
}
