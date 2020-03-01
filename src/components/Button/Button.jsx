import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ButtonStyled = styled.button`
  border: 2px solid #D7C078;
  display: inline-block;
  margin: 10px 0;
  padding: 10px;
  width: 100px;
  text-align: center;
  align-self: center;

  color: #B70000;
  font-family: 'Nova Flat', Helvetica, Arial, sans-serif;
`;

const Button = ({ callback, value }) => (<ButtonStyled onClick={() => callback()}>{value}</ButtonStyled>);

Button.propTypes = {
  callback: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

Button.defaultProps = {
  callback: () => console.log('defina um callback'),
  value: 'Next',
};

export default Button;