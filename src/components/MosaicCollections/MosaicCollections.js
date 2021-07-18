import React, { useState } from 'react';
import { DivAlbum, DivPhoto } from './Styled'
import ImageDetails from '../ImageDetails/ImageDetails';
import { useHistory } from 'react-router-dom'
import { goToCollection, goToHome } from '../../router/coordinator'

function MosaicCollections({ collections }) {
  const [detailsImageId, setDetailsImageId] = useState(false)
  const history = useHistory()

  return (
    <>
      <DivAlbum>
        {
          collections.slice(0, 1).map(({ id, image_file, name, number_of_images }) => {
            return (
              <DivPhoto key={id}>
                <img src={image_file} onClick={() => goToHome(history)} />
                <div>
                  <div>
                    <div className="title">
                      {name}
                    </div>
                    <div className="number">
                      {number_of_images}
                    </div>
                  </div>
                </div>
              </DivPhoto>
            )
          })
        }
        {
          collections.length
          && collections.slice(1).map(({ id, image_file, name, number_of_images }) => {
            return (
              <DivPhoto key={id}>
                <img src={image_file} onClick={() => goToCollection(history, id)} />
                <div>
                  <div>
                    <div className="title">
                      {name}
                    </div>
                    <div className="number">
                      {number_of_images}
                    </div>
                  </div>
                </div>
              </DivPhoto>
            )
          })
        }
      </DivAlbum>
      {detailsImageId && <ImageDetails imageId={detailsImageId} setImageId={setDetailsImageId} />}
    </>
  );
}

export default MosaicCollections;
