import styled from "styled-components";
import { colorError } from '../../GlobalStyle'

export const DivForm = styled.div`
display: flex;
align-items: stretch;
justify-content: center;
>form{
    max-width: 600px;
    width: 100%;
    margin: 1rem;
  
}
`
export const DivImg = styled.div`
    width: 200px;
    height: 200px;
    border: solid 1px black;
    border-radius: 2px;
    margin: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        max-height: 100%;
        max-width: 100%;
    }
`
export const DivBasicsInformation = styled.div`
    
    display: flex;
    align-items: center;
`
export const DivInputs = styled.div`
    flex-direction: column;
    display: flex;
    margin: 0.5rem;
`

