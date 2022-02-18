import PropTypes from 'prop-types';

import { Container } from './Styles';

export default function FormGroup({ children }) {
  return (
    <Container>
     {children}
    </Container>
  );
}

FormGroup.proptype = {
  children: PropTypes.node.isRequired,
};
