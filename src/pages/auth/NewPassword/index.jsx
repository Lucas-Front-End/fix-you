// src/screens/Login/Login.jsx
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useTheme } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';
import InputText from '../../../components/inpuText';
import logoLogin from '../../../assets/images/logos/logoLogin.svg';
import SimpleButton from '../../../components/simpleButton';
import {
  passwordLengthValid,
  passwordUppercaseValid,
  passwordLowercaseValid,
  passwordSpecialCharValid,
} from '../../../utils/validation';

export default function NewPassword() {
  const navigate = useNavigate();

  const [senhaValue, setSenhaValue] = useState('');

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { senha: '', confirmaSenha: '' },
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
            <S.Title>Cadastre sua nova senha</S.Title>
            <Controller
              name="senha"
              control={control}
              rules={{ required: 'Senha é obrigatória' }}
              render={({ field: { value, onChange, onBlur } }) => (
                <InputText
                  label="Nova senha"
                  placeholder="Digite sua nova senha"
                  type="password"
                  value={value}
                  onChange={(text) => {
                    onChange(text);
                    setSenhaValue(text);
                  }}
                  onBlur={onBlur}
                  status={errors.senha ? 'error' : 'default'}
                />
              )}
            />
            {errors.senha && <S.ErrorText>{errors.senha.message}</S.ErrorText>}

            {/* Checklist de requisitos da senha */}
            <S.PasswordChecklistWrapper>
              <S.PasswordChecklistItem>
                <S.PasswordCheckIcon valid={passwordLengthValid(senhaValue)} />
                <S.PasswordChecklistText>Pelo menos 8 caracteres</S.PasswordChecklistText>
              </S.PasswordChecklistItem>
              <S.PasswordChecklistItem>
                <S.PasswordCheckIcon valid={passwordUppercaseValid(senhaValue)} />
                <S.PasswordChecklistText>Pelo menos 1 caractere maiúsculo</S.PasswordChecklistText>
              </S.PasswordChecklistItem>
              <S.PasswordChecklistItem>
                <S.PasswordCheckIcon valid={passwordLowercaseValid(senhaValue)} />
                <S.PasswordChecklistText>Pelo menos 1 caractere minúsculo</S.PasswordChecklistText>
              </S.PasswordChecklistItem>
              <S.PasswordChecklistItem>
                <S.PasswordCheckIcon valid={passwordSpecialCharValid(senhaValue)} />
                <S.PasswordChecklistText>Pelo menos 1 caractere especial</S.PasswordChecklistText>
              </S.PasswordChecklistItem>
            </S.PasswordChecklistWrapper>

            <Controller
              name="confirmaSenha"
              control={control}
              rules={{ required: 'Senha é obrigatória' }}
              render={({ field: { value, onChange, onBlur } }) => (
                <InputText
                  label="Confirme a senha"
                  placeholder="Repita sua nova senha"
                  type="password"
                  value={value}
                  onChange={(text) => onChange(text)}
                  onBlur={onBlur}
                  status={errors.confirmaSenha ? 'error' : 'default'}
                />
              )}
            />
            {errors.confirmaSenha && <S.ErrorText>{errors.confirmaSenha.message}</S.ErrorText>}

            <SimpleButton
              width="411px"
              text="Redefinir senha"
              onPress={() => navigate('/codeValidationRequest')}
              colorButton={theme.colors.primary}
              margin="32px 0 16px 0"
            />

            <SimpleButton
              width="411px"
              text="Voltar para Login"
              onPress={() => navigate('/')}
              colorButton={theme.colors.background}
              fontColor={theme.colors.primary}
              borderColor={theme.colors.lightGray}
            />
          </S.FormWrapper>
        </S.LeftContent>
      </S.LeftPanel>

      <S.RightPanel>
        <S.Logo src={logoLogin} alt="FixYou" />
      </S.RightPanel>
    </S.PageContainer>
  );
}
