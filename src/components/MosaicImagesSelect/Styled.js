import { color5, colorPrimary, colorSecondary } from "../../GlobalStyle"
import styled from 'styled-components'
export const DivAlbum = styled.section`
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: flex-start;
width: 100%;
padding: 0.5rem;
margin-top: 30px;
`

export const Checkbox = styled.label`
width: 1rem;
height: 1rem;
position: absolute;
top: 0.5rem;
right:0.5rem;
cursor: pointer;
border-radius: 20%;
border: 1px solid black;
background-color: ${props => props.checked ? colorPrimary : color5};

`
export const DivPhoto = styled.label`
width: 300px;
height: 300px;
max-width: 400px;
position: relative;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
overflow: hidden;
margin: 0.5rem;
border: 1px solid black;
flex-grow: 1;
cursor: pointer;
>img{
    min-width: 100%;
    min-height: 100%;
}
>input{
    position: absolute;
    width: 1rem;
    top: 1rem;
    right: 1rem;
    display: none;
}
>div{
    width: 100%;
    background-color: ${colorPrimary};
    position: absolute;
    bottom: 0%;
    >div{
        color: ${color5};
        background: #000000aa;
        position: absolute;
        width: 100%;
        padding: 1rem;
        transition: 1s;
        bottom: 0%;
        margin: 0%;
    }
}
`

export const DivSaveCancel = styled.div`
    display: flex;
    justify-content: flex-end;
    position: fixed;
    right: 1rem;
    top: 1rem;
    background-color: white;
    z-index: 1;
`