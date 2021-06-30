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

`

export const DivAlbum = styled.section`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0.5rem;

`
export const DivPhoto = styled.div`
    width: 400px;
    height: 400px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    margin: 0.5rem;
    border: 1px solid black;
    flex-grow: 1;
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
            margin-bottom: -100%;
        }
    }
    :hover{
        >img{
            transform: scale(1.25);
            transition: 2s;
            cursor: pointer;
        }
        >div{
            bottom: 0%;
            >div{
            bottom: 0%;
            transition: 0.5s;
            margin: 0%;
            }
        }
       
    }
`