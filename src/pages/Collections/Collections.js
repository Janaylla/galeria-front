import React, { useState } from 'react';
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { DivContainer, MarginTop } from '../../GlobalStyle'
import Header from '../../components/Header/Header';
import { goToNewImage } from '../../router/coordinator'
import { useRequestData } from '../../hooks/useRequestData';
import MosaicCollections from '../../components/MosaicCollections/MosaicCollections'
import Model from '../../components/Model/Model';
import Form from './FormNewCollection'
function Collections() {
  useProtectedPage();

  const [collections, getCollections] = useRequestData('/collections/details', 'collections', [])
  const [showModel, setShowModel] = useState(false)

  return (
    <DivContainer>
      <Header text="Nova imagem" goTo={goToNewImage} pageCurrent="Collections"/>
      {console.log(collections)}
      <MosaicCollections collections={collections}
        showModel={showModel} setShowModel={setShowModel} />
      {showModel &&
        <Model show={showModel} setShow={setShowModel}>
          <MarginTop>         
          <Form updateCollection={getCollections} setShowModel={setShowModel}/>
          </MarginTop>
        </Model>}
    </DivContainer>
  );
}

export default Collections;
