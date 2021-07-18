import React,{useState} from 'react';
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { DivContainer } from '../../GlobalStyle'
import Header from '../../components/Header/Header';
import { goToNewImage } from '../../router/coordinator'
import MosaicImages from '../../components/MosaicImages/MosaicImages';
import {useRequestData} from '../../hooks/useRequestData';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

function Collection() {
  useProtectedPage();
  const {id} = useParams();
  const [images, getImages] = useRequestData(`/images/collection/${id}`, 'images', [])
  const [detailsImageId, setDetailsImageId] = useState(false)
console.log(images)
  return (
    <DivContainer>
      
      <Header text="Nova imagem" goTo={goToNewImage} />
      <MosaicImages images={images}/>
    </DivContainer>
  );
}

export default Collection;
