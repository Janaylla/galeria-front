import React,{useState} from 'react';
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { DivContainer, DivAlbum, DivPhoto } from '../../GlobalStyle'
import Header from '../../components/Header/Header';
import { goToNewImage } from '../../router/coordinator'
import ImageDetails from '../../components/ImageDetails/ImageDetails';
import {useRequestData} from '../../hooks/useRequestData';
function Home() {
  useProtectedPage();
  
  const [images, getImages] = useRequestData('/images', 'images', [])
  const [detailsImageId, setDetailsImageId] = useState(false)
  return (
    <DivContainer>
      <Header text="Nova imagem" goTo={goToNewImage} />
      <DivAlbum>
        {
          images.map(({id, file, subtitle}) => {
            return (
              <DivPhoto key={id}>
                <img src={file} onClick={() => setDetailsImageId(id)}/>
                <div>
                  <div>
                    {subtitle}
                  </div>
                </div>
              </DivPhoto>
            )
          })
        }
      </DivAlbum>
    {detailsImageId && <ImageDetails imageId={detailsImageId} setImageId={setDetailsImageId}/>}
    </DivContainer>
  );
}

export default Home;
