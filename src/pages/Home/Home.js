import React from 'react';
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { DivContainer } from '../../GlobalStyle'
import Header from '../../components/Header/Header';
import { goToNewImage } from '../../router/coordinator'
import MosaicImages from '../../components/MosaicImages/MosaicImages';
import { useRequestData } from '../../hooks/useRequestData';

function Home() {
  useProtectedPage();
  const [images, getImages] = useRequestData('/images', 'images', [])
  return (
    <DivContainer>
      <Header text="Nova imagem" goTo={goToNewImage} />
      <MosaicImages images={images} />
    </DivContainer>
  );
}

export default Home;
