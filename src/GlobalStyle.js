import styled from 'styled-components'
export const colorPrimary = '#d81519';
export const colorSuccess = '#39FF14'
export const colorError = '#ff0000'
export const colorSecondary = '#717c5e';
export const color3 = '#f6f3ee';
export const color4 = '#fdf1f0';
export const color5 = '#fefefe';


export const DivContainer = styled.div`
    min-height: 100vh;
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
    }
`
export const DivAuthentication = styled.div`
    display: flex;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
    background-color: ${color3};
    > div{
        padding: 3rem;
        display: flex;
        align-items: center;
        flex-direction: column;
        border: 1px solid black;
        border-radius: 5px;
        background-color: white;
        margin: 1rem;
        h1{
            color: ${colorPrimary};
            margin: 20px;
        }
    }
`
export const Form = styled.form`

`
export const Button = styled.button`
padding: 0.5rem;
cursor: pointer;
border: 3px solid ${colorPrimary};
margin: 4px;
border-radius: 20px;
font-size: 18px;
font-weight: 700;
color: ${colorPrimary};
background-color: white;
transition: 0.5s;
:hover{
color:white;
background-color: ${colorPrimary};
}
`
export const MarginTop = styled.div`
margin-top: 2rem;
`
export const H2 = styled.h2`
    font-size: 1rem;
    text-align: center;
    a{
        cursor: pointer;
        text-decoration: underline;
        opacity: 0.8;
        :hoveR{
            opacity: 1;
        }
    }
`