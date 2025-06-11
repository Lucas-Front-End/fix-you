import * as S from './styles';
import logo from '../../assets/images/logos/logoLogin.svg';
import notification from '../../assets/images/iconNotifications.svg';
import avatar from '../../assets/images/Avatar.png';

export default function Header() {
  return (
    <S.Header>
      <S.HeaderContainer>
        <S.LeftSection>
          <S.Imgs src={logo} alt="logo" title="logo" width={193} heigth={72} />
        </S.LeftSection>
        <S.RightSection>
          <S.User>
            <S.ContainerUser>
              <span className="name">João da Silva</span>
              <span className="email">jsilva@hospitalclinicas.com</span>
            </S.ContainerUser>
            <S.Avatar src={avatar} alt="Avatar" title="Avatar" width={193} heigth={72} />
          </S.User>
          <S.ButtonNotifications>
            <S.Imgs src={notification} alt="Ícone Notification" title="Ícone Notification" width={24} heigth={24} />
          </S.ButtonNotifications>
        </S.RightSection>
      </S.HeaderContainer>
    </S.Header>
  );
}
