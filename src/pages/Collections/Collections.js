import React, { useState } from 'react';
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { DivContainer, DivAlbum, DivPhoto } from '../../GlobalStyle'
import Header from '../../components/Header/Header';
import { goToNewImage } from '../../router/coordinator'
import ImageDetails from '../../components/ImageDetails/ImageDetails';
import { useRequestData } from '../../hooks/useRequestData';
import MosaicCollections from '../../components/MosaicCollections/MosaicCollections'

function Collections() {
  useProtectedPage();

  const [collections, getCollections] = useRequestData('/collections/details', 'collections', [])
  const [detailsImageId, setDetailsImageId] = useState(false)
  return (
    <DivContainer>
      <Header text="Nova imagem" goTo={goToNewImage} />
      {console.log(collections)}
      <MosaicCollections collections={collections}/>
      {detailsImageId && <ImageDetails imageId={detailsImageId} setImageId={setDetailsImageId} />}
    </DivContainer>
  );
}

export default Collections;
