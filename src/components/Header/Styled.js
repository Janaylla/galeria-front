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
  width: 100%;
  > li:nth-of-type(n+1){
    margin-right: 20px;
  }
  > li:last-of-type{
    flex-grow: 1;
    text-align: end;
    margin-right: none;
  }
`
export const Option = styled.li`
  cursor: pointer;
  font-weight: ${props => props.pageCurrent ?  700 :  400};
  opacity: 0.9;
  :hover{
    opacity: 1;
    font-weight: 600;
  }
`
