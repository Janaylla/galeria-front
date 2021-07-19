import React, {useState} from "react";
import {
    DivContainer,
    DivDetails,
    DivIconCancel
} from "./Styled";
import { ReactComponent as Cancel } from "../../assets/cancel_circle.svg";

export default function Model({children, setShow}) {
    return (
        <DivContainer>
            <div onClick={() => setShow(false)}>

            </div>
            <div>
                    {children}
                    <DivIconCancel onClick={() => setShow(false)}>
                        <Cancel/>
                    </DivIconCancel>
            </div> 
        </DivContainer>
    );
}
