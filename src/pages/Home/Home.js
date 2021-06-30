import React,{useState} from 'react';
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { DivContainer, DivAlbum, DivPhoto } from '../../GlobalStyle'
import Header from '../../components/Header/Header';
import { goToNewImage } from '../../router/coordinator'
import ImageDetails from '../../components/ImageDetails/ImageDetails';
function Home() {
  useProtectedPage();
  const album = [
    'https://thumbs.dreamstime.com/z/flores-bonitas-aleat%C3%B3rias-91985724.jpg',
    'https://thumbs.dreamstime.com/z/flores-bonitas-aleat%C3%B3rias-91985724.jpg',
    'https://thumbs.dreamstime.com/z/flores-bonitas-aleat%C3%B3rias-91985724.jpg',
    'https://thumbs.dreamstime.com/z/flores-bonitas-aleat%C3%B3rias-91985724.jpg',
    'https://thumbs.dreamstime.com/z/flores-bonitas-aleat%C3%B3rias-91985724.jpg',
    'https://thumbs.dreamstime.com/z/flores-bonitas-aleat%C3%B3rias-91985724.jpg',
  ];
  const [imageId, setImageId] = useState();
  return (
    <DivContainer>
      <Header text="Nova imagem" goTo={goToNewImage} />
      <DivAlbum>
        {
          album.map((photo) => {
            return (
              <DivPhoto onClick={() => setImageId(true)}>
                <img src={photo} />
                <div>
                  <div>
                    Descrição e tals
                  </div>
                </div>
              </DivPhoto>
            )
          })
        }
      </DivAlbum>
      {<ImageDetails imageId={imageId}/>}
    </DivContainer>
  );
}

export default Home;
