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
    height: 100vh;
    align-items: stretch;
    > div:first-of-type{
        flex-grow: 1;
    }
    > div:last-of-type{
        padding: 3rem;
        background-color: ${color3};
        display: flex;
        align-items: center;
    }
`
export const Form = styled.form`

`
export const Button = styled.button`
padding: 0.5rem;
cursor: pointer;
`
