import styled from "styled-components";
import {color5} from '../../GlobalStyle'
export const   DivContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top:0;
  padding: 2rem;
  >div:first-child{
    width: 100%;
    height: 100%;
    background-color: #000000aa;
    position: absolute;
  }
  >div:last-child{
    min-width: 300px;
    min-height: 100px;
    background-color: ${color5};
    display: flex;
    padding: 1rem;
    position: relative;
  }
`;
export const DivIconCancel = styled.div`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  opacity: 0.5;
  position: absolute;
  right:  1rem;
  top: 1rem;
  >svg{
    width: 2rem;
  }
  :hover{
    transition: 1s;
    opacity: 1;
  }
`
export const DivInformation = styled.div`
  margin: 1rem;
`