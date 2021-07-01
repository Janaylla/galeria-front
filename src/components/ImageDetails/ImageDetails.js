import React from "react";
import {
    DivContainer,
    DivImg,
    DivDetails,
    DivIconCancel
} from "./Styled";
import { ReactComponent as Cancel } from "../../assets/cancel_circle.svg";

export default function ImageDetails({setImageId, imageId }) {
    return (
        <DivContainer>
            <div onClick={() => setImageId(false)}>

            </div>
            <div>
                <DivImg>
                    <img src="https://thumbs.dreamstime.com/z/flores-bonitas-aleat%C3%B3rias-91985724.jpg"/>
                </DivImg>
                <DivDetails>
                    <DivIconCancel onClick={() => setImageId(false)}>
                        <Cancel/>
                    </DivIconCancel>
                </DivDetails>
            </div>
        </DivContainer>
    );
}
