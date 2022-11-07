// Packages
import styled from 'styled-components';

export const RadioRootWrapper = styled.div`

`

export const RadioButtonWrapper = styled.div`

  input[type='radio'] {
    display: none;
  }

  label {
    display: flex;
    align-items: center;
    column-gap: 20px;
  }

  section {
    border: 1px solid black;
    width: 40px;
    height: 40px;
    display: grid;
    place-content: center;
  }

  span {
    transition: 0.5s ease;
    color: black;
    content: '';
    width: 23px;
    height: 23px;
    /* background: black; */
  }

  input[type='radio']:checked + section {
    border-color: #ac70f9;
  }

  input[type='radio']:checked + section span {
    background: #ac70f9;
  }

`