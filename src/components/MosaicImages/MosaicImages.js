import React,{useState} from 'react';
import {  DivAlbum, DivPhoto } from './Styled'
import ImageDetails from '../ImageDetails/ImageDetails';
function MosaicImages({images}) {
  const [detailsImageId, setDetailsImageId] = useState(false)
  return (
    <>
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
</>
  );
}

export default MosaicImages;
