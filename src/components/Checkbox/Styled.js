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
`