import { color5, colorPrimary } from "../../GlobalStyle"
import styled from 'styled-components'
export const DivAlbum = styled.section`
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: start;
width: 100%;
padding: 0.5rem;

`
export const DivPhoto = styled.div`
width: 200px;
height: 200px;
max-width: 300px;
position: relative;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
overflow: hidden;
margin: 0.5rem;
border: 1px solid black;
flex-grow: 1;
cursor:pointer;
>img{
    min-width: 100%;
    min-height: 100%;
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
        display: flex;
        justify-content: space-between;
        bottom: 0%;
        margin: 0%;
    }
}
`