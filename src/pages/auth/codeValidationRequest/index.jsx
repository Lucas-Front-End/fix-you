// src/screens/Login/Login.jsx
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useTheme } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';
import InputText from '../../../components/inpuText';
import logoLogin from '../../../assets/images/logos/logoLogin.svg';
import SimpleButton from '../../../components/simpleButton';

export default function CodeValidationRequest() {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { email: '', senha: '' },
  });

  const onSubmit = (data) => {
    console.log('Dados do formulário:', data);
  };

  const theme = useTheme();

  return (
    <S.PageContainer>
      <S.LeftPanel>
        <S.LeftContent>
          <S.FormWrapper onSubmit={() => handleSubmit(onSubmit)}>
            <S.Title>Verificação de segurança</S.Title>

            <S.Description>Insira abaixo os números enviados para verificação em email@exemplo.com </S.Description>

            <Controller
              name="email"
              control={control}
              rules={{
                required: 'Código é obrigatório',
                validate: (value) => /^[0-9]{4}$/.test(value) || 'Código inválido',
              }}
              render={({ field: { value, onChange, onBlur } }) => (
                <InputText
                  label="Código"
                  type="code"
                  value={value}
                  onChange={(text) => onChange(text)}
                  onBlur={onBlur}
                  status={errors.email ? 'error' : 'default'}
                />
              )}
            />
            {errors.email && <S.ErrorText>{errors.email.message}</S.ErrorText>}

            <SimpleButton
              width="411px"
              text="Validar código"
              onPress={() => navigate('/newPassword')}
              colorButton={theme.colors.primary}
              margin="32px 0 16px 0"
            />

            <S.Description>O token expira em 05:00</S.Description>
            <S.CodeResend onClick={() => navigate('/passwordResetRequest')}>Reenviar código</S.CodeResend>
          </S.FormWrapper>
        </S.LeftContent>
      </S.LeftPanel>

      <S.RightPanel>
        <S.Logo src={logoLogin} alt="FixYou" />
      </S.RightPanel>
    </S.PageContainer>
  );
}
