// Packages
import styled from 'styled-components';
import { IRadioItem } from '.';

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

export const StyledRadio = styled.button`

  all: 'unset';
  background-color: blue;
  width: 25px;
  height: 25px;
  border-radius: 100%;
  /* boxShadow: 0 2px 10px ${blackA.blackA7}; */

  &:hover { background-color: violet };
  &:focus { box-shadow: 0 0 0 2px black };

`

export const StyledIndicator = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;
  &::after {
    content: '""';
    display: block;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: violet;
  }

`

