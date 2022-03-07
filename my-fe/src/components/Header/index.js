import { Container } from './styles';

import logo from '../../assets/images/icons/logo.svg';

export default function Header() {
  return (
      <Container>
       <img src={logo} alt="Mycontacts" width="201px" />
      </Container>
  );
}
