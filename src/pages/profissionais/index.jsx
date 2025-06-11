import { useNavigate } from 'react-router-dom';
import BaseLayout from '../../layouts/index';
import * as S from './styles';
import PrimaryButton from '../../components/PrimaryButton';

export default function Profissionais() {
  const navigate = useNavigate();
  return (
    <BaseLayout>
      <S.Content>
        <S.Title>Profissionais</S.Title>
        <S.Card>
          <S.Text>Nenhum profissional encontrado.</S.Text>
          <S.Text>Clique no botão abaixo para começar a incluir profissionais.</S.Text>
          <PrimaryButton
            hoverBg="#006064"
            onClick={() => navigate('/profissionais/cadastro-de-profissionais')}
            width={201}
          >
            Adicionar profissional
          </PrimaryButton>
        </S.Card>
      </S.Content>
    </BaseLayout>
  );
}
