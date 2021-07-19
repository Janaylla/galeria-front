import styled from "styled-components";
import { colorError } from '../../GlobalStyle'

export const DivFormControl = styled.div`
  padding: 0.5rem 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  .Error {
    border: solid 1px ${colorError};
  }
  .Error label {
    color: ${colorError};
  }
`;
export const DivCheckbox = styled.div`
  display: flex;
  align-items: center;
  *{
    cursor: pointer;
  }
  >input{
    display: none;
  }
`
export const H3 = styled.h3
``
export const Label = styled.label`
  padding: 3px 9px;
  border-radius: 20px;
  border: solid black 2px;
  margin: 6px;
  background-color: ${props => props.checked ? "black" :"white"};
  color: ${props => props.checked ? "white" :"black"};
`
export const DivCheckboxes = styled.div`

display: flex;
  justify-content: flex-start;
  
  flex-wrap: wrap;
`