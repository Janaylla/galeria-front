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
    background-color: ${color5};
    display: flex;
    padding: 0.5rem;
    position: relative;
    height: calc(100%);
    width: calc(100%);
    justify-items: center;
    align-items: center;
    width: 100%;
  }
`;
export const DivImg = styled.div`
  border: solid black 1px;
  height:100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  >img{
    max-width: 100%;
    max-height: 100%;
  }
`
export const DivDetails = styled.div`
  flex-grow: 1;
  position: absolute;
  width: calc(100% - 1rem);
  background-color: #000000bb;
  color:white;
  height: calc(100% - 1rem);
  h3{
    display: flex;
    margin: 10px;
    flex-wrap: wrap;
  h5{
    border-radius: 20px;
    padding: 4px 9px;
    border: solid 2px white;
    width: auto;
    margin-left: 10px;
  }
}
  
`
export const DivIcons = styled.div`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  position: absolute;
  right:  1rem;
  top: 1rem;
  >svg{
    width: 2rem;
  opacity: 0.5;
    :hover{
      transition: 1s;
      opacity: 1;
    }
  }
`
export const DivInformation = styled.div`
  margin: 1rem;
`