import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ButtonStyled = styled.button`
  background-color: transparent;
  border: 2px solid #FFF;
  border-radius: 5px;
  display: inline-block;
  margin: 10px 0;
  padding: 5px;
  width: 125px;
  text-align: center;
  align-self: center;

  /* color: #B70000; */
  color: #FFF;
  font-family: 'Nova Flat', Helvetica, Arial, sans-serif;
  font-size: 16px;
  outline: none;

  &:hover {
    background-color: #FFF;
    color: #000;
  }
`;

const Button = ({ callback, value }) => (<ButtonStyled onClick={() => callback()}>{value}</ButtonStyled>);

Button.propTypes = {
  callback: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Button;