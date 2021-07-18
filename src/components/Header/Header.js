import React from "react";
import { useHistory } from 'react-router-dom'
import {
    DivContainer,
    Menu,
    Option
} from "./Styled";
import {goToHome, goToNewImage, goToCollections} from '../../router/coordinator'

export default function Header({ pageCurrent }) {

    const history = useHistory()
    return (
        <DivContainer>
            <Menu>
                <Option onClick={() => goToHome(history)}>Home</Option>
                <Option onClick={() => goToCollections(history)}>Coleções</Option>
                <Option onClick={() => goToNewImage(history)}>Nova imagem</Option>
            </Menu>
        </DivContainer>
    );
}
