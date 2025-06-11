import { Controller } from 'react-hook-form';
import * as S from './styles';

export default function CheckboxCustom({ control, name, label, options = [], errorMessage, required = false }) {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <Controller
        control={control}
        name={name}
        rules={{
          validate: (value) => {
            if (required && (!value || value.length === 0)) {
              return 'Obrigatório';
            }
            return true;
          },
        }}
        render={({ field: { value = [], onChange } }) => {
          const handleToggle = (optionValue) => {
            if (value.includes(optionValue)) {
              onChange(value.filter((v) => v !== optionValue));
            } else {
              onChange([...value, optionValue]);
            }
          };

          return (
            <S.Group>
              {options.map((opt) => (
                <S.CheckboxLabel key={opt.value}>
                  <S.Checkbox
                    type="checkbox"
                    checked={value.includes(opt.value)}
                    onChange={() => handleToggle(opt.value)}
                  />
                  {opt.label}
                </S.CheckboxLabel>
              ))}
            </S.Group>
          );
        }}
      />
      {errorMessage && <S.ErrorText>{errorMessage}</S.ErrorText>}
    </S.Container>
  );
}
