import styled from "styled-components";
import {} from '../../GlobalStyle'
export const   DivContainer = styled.div`
  width: 100%;
  height: 70px;
  background-color: black;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 20px ;
`;

export const Menu = styled.ul`
  color: white;
  display: flex;
  > li:nth-of-type(n+1){
    margin-right: 20px;
  }
`
export const Option = styled.li`
  cursor: pointer;
`
