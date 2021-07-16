import React from "react";
import {
    DivContainer,
    DivImg,
    DivDetails,
    DivIconCancel,
    DivInformation
} from "./Styled";
import { ReactComponent as Cancel } from "../../assets/cancel_circle.svg";
import { useRequestData } from '../../hooks/useRequestData'
export default function ImageDetails({setImageId, imageId }) {
    
  const [image, getImage] = useRequestData(`/images/${imageId}`, 'image', {})

  const {author, collection, date, file, id, subtitle, tags} = image
  console.log(image)

    return (
        <DivContainer>
            <div onClick={() => setImageId(false)}>

            </div>
            <div>
                {id && <DivImg>
                    <img src={file}/>
                </DivImg>}
                <DivDetails>
                    {id && <DivInformation>
                        <h1>{subtitle}</h1>
                        <h3>Data: {date}</h3>
                        <h3>Autor: {author.name}</h3>
                        <h3>Coleções: {collection && collection.map((tag) => {
                            return tag.name + " "
                        })}</h3>
                        <h3>Tags: {tags && tags.map((tag) => {
                            return tag.name + " "
                        })}</h3>
                    </DivInformation>}
                    <DivIconCancel onClick={() => setImageId(false)}>
                        <Cancel/>
                    </DivIconCancel>
                </DivDetails>
            </div>
        </DivContainer>
    );
}
