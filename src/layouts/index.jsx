import Header from '../components/Header';
import { Menu } from '../components/Menu';
import * as S from './styles';

export default function BaseLayout({ children }) {
  return (
    <>
      <Header />
      <S.BaseLayout>
        <Menu />
        {children}
      </S.BaseLayout>
    </>
  );
}
