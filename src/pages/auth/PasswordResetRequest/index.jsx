// src/screens/Login/Login.jsx
import React from "react";
import { useForm, Controller } from "react-hook-form";
import * as S from "./styles";
import InputText from "../../../components/inpuText";
import logoLogin from "../../../assets/images/logos/logoLogin.svg";
import SimpleButton from "../../../components/simpleButton";
import { useTheme } from "styled-components";
import { useNavigate } from "react-router-dom";

export default function PasswordResetRequest() {
  const navigate = useNavigate();

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

  return (
    <S.PageContainer>
      <S.LeftPanel>
        <S.LeftContent>
          <S.FormWrapper onSubmit={() => handleSubmit(onSubmit)}>
            <S.Title>Redefinição de senha</S.Title>

            <S.Description>
              Digite seu e-mail de acesso para redefinir sua senha
            </S.Description>

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

            <SimpleButton
              width="411px"
              text="Enviar instruções"
              onPress={handleSubmit(onSubmit)}
              colorButton={theme.colors.primary}
              margin="32px 0 16px 0"
            />

            <SimpleButton
              width="411px"
              text="Voltar para Login"
              onPress={() => navigate("/")}
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
