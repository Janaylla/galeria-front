import React, { useState } from 'react';
import { DivCollections, DivCollection, DivMoreCollection } from './Styled'
import ImageDetails from '../ImageDetails/ImageDetails';
import { useHistory } from 'react-router-dom'
import { goToCollection, goToHome } from '../../router/coordinator'
import {ReactComponent as AddIcon} from '../../assets/add_circle.svg'
function MosaicCollections({ collections, setShowModel }) {
  const [detailsImageId, setDetailsImageId] = useState(false)
  const history = useHistory()

  return (
    <>
      <DivCollections>

        {
          collections.map(({ id, image_file, name, number_of_images }, index) => {
            return (
              <DivCollection key={id}>
                <img src={image_file} onClick={index != 0 ? () => goToCollection(history, id) : () => goToHome(history)} />
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
              </DivCollection>
            )
          })
        }
        <DivMoreCollection>
          <AddIcon onClick={() => setShowModel(true)}/>
        </DivMoreCollection>
      </DivCollections>
      {detailsImageId && <ImageDetails imageId={detailsImageId} setImageId={setDetailsImageId} />}
      
    </>
  );
}

export default MosaicCollections;
