import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ButtonStyled = styled(Link)`
  border: 2px solid #D7C078;
  display: inline-block;
  flex-grow: 1;
  margin: 10px 0;
  padding: 10px;
  width: 100px;
  text-align: center;
  align-self: center;
`;

const Button = ({ to, value }) => (<ButtonStyled to={to}>{value}</ButtonStyled>);

Button.propTypes = {
  to: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

Button.defaultProps = {
  to: "/planets/1",
  value: "Navegar",
};

export default Button;