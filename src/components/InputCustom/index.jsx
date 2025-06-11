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

  return (
    <S.Container margin={margin}>
      <S.Label hasError={!!errorMessage}>{label}</S.Label>
      <Controller
        control={control}
        name={name}
        rules={{
          required: `Obrigatório`,
          validate: validators[type],
        }}
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
              onChange={(e) => onChange(getFormattedValue(e.target.value))}
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
