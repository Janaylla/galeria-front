import React from "react";
import { useHistory } from 'react-router-dom'
import {
    DivContainer
} from "./Styled";
import { Button } from '../../GlobalStyle'

export default function Header({ text, goTo }) {

    const history = useHistory()
    
    return (
        <DivContainer>
            <Button onClick={() => goTo(history)}>
                {text}
            </Button>
        </DivContainer>
    );
}
