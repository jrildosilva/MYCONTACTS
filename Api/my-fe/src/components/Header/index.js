import { Container, InputSearchContainer } from './styles';

import logo from '../../assets/images/logo.jpg';

export default function Header() {
  return (
      <Container>
      <img src={logo} alt="Mycontacts" width="201px" />

      <InputSearchContainer>
        <input type="text" placeholder="pesquise pelo nome..." />
      </InputSearchContainer>
      </Container>
  );
}
