import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./styles";
import { ReactComponent as IconHome } from '../../assets/images/iconHome.svg';
import { ReactComponent as IconProfessionals } from '../../assets/images/iconProfessionals.svg';
import { ReactComponent as IconSettings } from '../../assets/images/iconSettings.svg';
import { ReactComponent as IconExit } from '../../assets/images/iconExit.svg';

export function Menu() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <S.Aside>
      <S.Nav>
        <S.MenuItem onClick={() => navigate("/")} active={pathname === "/"}>
          <IconHome />
          <span>Home</span>
        </S.MenuItem>

        <S.MenuItem onClick={() => navigate("/profissionais")} active={pathname.startsWith("/profissionais")}>
          <IconProfessionals />
          <span>Profissionais</span>
        </S.MenuItem>

        <S.Divider />

        <S.MenuItem onClick={() => navigate("/configuracoes")} active={pathname === "/configuracoes"}>
          <IconSettings />
          <span>Configurações</span>
        </S.MenuItem>

        <S.MenuItem danger>
          <IconExit />
          <span>Sair</span>
        </S.MenuItem>
      </S.Nav>

      <S.SupportButton>Falar com suporte</S.SupportButton>
    </S.Aside>
  );
}
