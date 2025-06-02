// src/screens/Login/Login.jsx
import React from "react";
import { useForm, Controller } from "react-hook-form";
import * as S from "./styles";
import InputText from "../../../components/inpuText";
import logoLogin from "../../../assets/images/logos/logoLogin.svg";
import SimpleButton from "../../../components/simpleButton";
import { useTheme } from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { email: "", senha: "" },
  });

  const onSubmit = (data) => {
    console.log("Dados do formulário:", data);
  };

  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <S.PageContainer>
      <S.LeftPanel>
        <S.LeftContent>
          <S.FormWrapper onSubmit={() => handleSubmit(onSubmit)}>
            <S.Title>Acesse sua conta</S.Title>

            <Controller
              name="email"
              control={control}
              rules={{
                required: "E-mail é obrigatório",
                validate: (value) =>
                  /\S+@\S+\.\S+/.test(value) || "E-mail inválido",
              }}
              render={({ field: { value, onChange, onBlur } }) => (
                <InputText
                  label="E-mail"
                  placeholder="Digite seu e-mail"
                  type="email"
                  value={value}
                  onChange={(text) => onChange(text)}
                  onBlur={onBlur}
                  status={errors.email ? "error" : "default"}
                />
              )}
            />
            {errors.email && <S.ErrorText>{errors.email.message}</S.ErrorText>}

            <Controller
              name="senha"
              control={control}
              rules={{ required: "Senha é obrigatória" }}
              render={({ field: { value, onChange, onBlur } }) => (
                <InputText
                  label="Senha"
                  placeholder="Digite sua senha"
                  type="password"
                  value={value}
                  onChange={(text) => onChange(text)}
                  onBlur={onBlur}
                  status={errors.senha ? "error" : "default"}
                />
              )}
            />
            {errors.senha && <S.ErrorText>{errors.senha.message}</S.ErrorText>}

            <S.ForgotPassword onClick={() => navigate("/passwordResetRequest")}>
              Esqueci a senha
            </S.ForgotPassword>

            <SimpleButton
              width="411px"
              text="Entrar"
              onPress={handleSubmit(onSubmit)}
              colorButton={theme.colors.primary}
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
