import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import BaseLayout from '../../../layouts/index';
import InputCustom from '../../../components/InputCustom';
import PrimaryButton from '../../../components/PrimaryButton';
import * as S from '../styles';
import CheckboxCustom from '../../../components/CheckboxCustom';

export default function Cadastro() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    clearErrors,
  } = useForm();

  const contrato = watch('contrato');

  useEffect(() => {
    if (contrato === 'clt') {
      setValue('razaoSocial', '');
      setValue('cnpj', '');
      clearErrors(['razaoSocial', 'cnpj']);
    }
  }, [contrato, setValue, clearErrors]);

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    // navegar, enviar dados, etc.
  };

  return (
    <BaseLayout>
      <S.Content>
        <S.Title>Cadastro de Profissional</S.Title>
        <S.Card>
          <form onSubmit={handleSubmit(onSubmit)}>
            <S.Grid>
              <InputCustom
                name="nome"
                label="Nome completo"
                placeholder="Digite o nome"
                control={control}
                errorMessage={errors.nome?.message}
              />
              <InputCustom
                name="email"
                label="E-mail"
                placeholder="Digite o e-mail"
                type="email"
                control={control}
                errorMessage={errors.email?.message}
              />
              <InputCustom
                name="cpf"
                label="CPF"
                placeholder="Digite o CPF"
                type="cpf"
                control={control}
                errorMessage={errors.cpf?.message}
              />
              <InputCustom
                name="funcao"
                label="Função"
                placeholder="Selecione"
                type="select"
                options={[
                  { label: 'Médico', value: 'medico' },
                  { label: 'Enfermeiro', value: 'enfermeiro' },
                  { label: 'Técnico de enfermagem ', value: 'Técnico de enfermagem ' },
                  { label: 'Recepcionista', value: 'Recepcionista' },
                  { label: 'Outros', value: 'Outros' },
                ]}
                control={control}
                errorMessage={errors.funcao?.message}
              />
              <InputCustom
                name="contrato"
                label="Tipo de contrato"
                placeholder="Selecione"
                type="select"
                options={[
                  { label: 'CLT', value: 'clt' },
                  { label: 'PJ', value: 'pj' },
                  { label: 'Outros', value: 'uutros' },
                ]}
                control={control}
                errorMessage={errors.contrato?.message}
              />
              <InputCustom
                name="dataAdmissao"
                label="Data de admissão"
                placeholder="DD/MM/AAAA"
                type="date"
                control={control}
                errorMessage={errors.dataAdmissao?.message}
              />
            </S.Grid>
            {['clt', 'pj'].includes(contrato) && (
              <S.Grid>
                <div style={{ gridColumn: 'span 2' }}>
                  <InputCustom
                    name="razaoSocial"
                    label="Razão Social"
                    placeholder={contrato === 'clt' ? 'Não se aplica' : 'Digite a razão social'}
                    control={control}
                    contrato={contrato}
                    disabled={contrato === 'clt'}
                    errorMessage={errors.razaoSocial?.message}
                  />
                </div>
                <InputCustom
                  name="cnpj"
                  label="CNPJ"
                  placeholder={contrato === 'clt' ? 'Não se aplica' : 'Digite o CNPJ'}
                  type="cnpj"
                  control={control}
                  contrato={contrato}
                  disabled={contrato === 'clt'}
                  errorMessage={errors.cnpj?.message}
                />
              </S.Grid>
            )}
            <CheckboxCustom
              name="perfis"
              label="Perfil de permissões"
              control={control}
              required
              errorMessage={errors.perfis?.message}
              options={[
                { label: 'Administrador (Dashboard)', value: 'admin' },
                { label: 'Gestor (Dashboard)', value: 'gestor' },
                { label: 'Profissional (APP)', value: 'app' },
              ]}
            />

            <S.Actions>
              <PrimaryButton
                bg="#ffffff"
                width={102}
                border="1px solid #D7D7D9"
                color="#024959"
                hoverBg="#024959"
                hoverColor="#ffffff"
              >
                Cancelar
              </PrimaryButton>
              <PrimaryButton hoverBg="#006064" type="submit" width={81}>
                Salvar
              </PrimaryButton>
            </S.Actions>
          </form>
        </S.Card>
      </S.Content>
    </BaseLayout>
  );
}
