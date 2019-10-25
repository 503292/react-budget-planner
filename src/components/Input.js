import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledInput = styled.input`
  color: #171718;
  font: inherit;
  font-size: 1.2rem;
  padding: 16px;
  border-radius: 4px;
  border: 1px solid #bdbdbd;
  width: 100%;
  outline: 0;

  &:focus {
    border: 1px solid #2b32b2;
  }
`;

const Input = ({
  type = 'text',
  value = null,
  onChange = () => null,
  name = '',
  placeholder = '',
}) => (
  <StyledInput
    placeholder={placeholder}
    type={type}
    value={value}
    onChange={onChange}
    name={name}
  />
);

Input.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
};

export default Input;
