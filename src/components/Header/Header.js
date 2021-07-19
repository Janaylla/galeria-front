import React from "react";
import { useHistory } from 'react-router-dom'
import {
    DivContainer,
    Menu,
    Option
} from "./Styled";
import { goToHome, goToNewImage, goToCollections, goToLogin } from '../../router/coordinator'

export default function Header({ pageCurrent }) {
    const history = useHistory()
    const logOut = () => {
        window.localStorage.removeItem('token')
        goToLogin(history)
    }
    return (
        <DivContainer>
            <Menu>
                <Option pageCurrent={pageCurrent === "Home"} onClick={() => goToHome(history)}>Home</Option>
                <Option pageCurrent={pageCurrent === "Collections"} onClick={() => goToCollections(history)}>Coleções</Option>
                <Option pageCurrent={pageCurrent === "NewImage"} onClick={() => goToNewImage(history)}>Nova imagem</Option>
                <Option onClick={() => logOut()}>Sair</Option>
            </Menu>
        </DivContainer>
    );
}
