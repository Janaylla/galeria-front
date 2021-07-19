import React from "react";
import {
    DivContainer,
    DivImg,
    DivDetails,
    DivIcons,
    DivInformation
} from "./Styled";
import { ReactComponent as Cancel } from "../../assets/cancel_circle.svg";
import { ReactComponent as MoreInfo } from "../../assets/circle_info.svg";
import { useRequestData } from '../../hooks/useRequestData'
import { useState } from "react/cjs/react.development";
import maskDate from '../../constants/maskDate'
export default function ImageDetails({setImageId, imageId }) {
    
  const [image] = useRequestData(`/images/${imageId}`, 'image', {})
const [showDetails, setShowDetails] = useState(false)
  const {author, collections, date, file, id, subtitle, tags} = image
  console.log(image)

    return (
        <DivContainer>
            <div onClick={() => setImageId(false)}>

            </div>
            <div>
                { <DivImg>
                    <img src={file}/>
                </DivImg>}
                    <DivIcons>
                        <MoreInfo onClick={() => setShowDetails(true)}/>
                        <Cancel  onClick={() => setImageId(false)}/>
                    </DivIcons>
               {showDetails && <DivDetails>
                    {id && <DivInformation onClick={() =>  setShowDetails(false)}>
                        <h1>{subtitle}</h1>
                        <h3>Data: {maskDate(date)}</h3>
                        <h3>Autor: {author.name}</h3>
                        <h3>Coleções: {collections && collections.map(({name}) => {
                            return <h5>{name + " "}</h5>
                        })}
                        </h3>
                        <h3>Tags: {tags && tags.map(({name}) => {
                            return <h5>{name + " "}</h5>
                        })}</h3>
                    </DivInformation>}
                </DivDetails>}
            </div>
        </DivContainer>
    );
}
