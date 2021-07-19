import React, { useState, useEffect } from 'react';
import { DivAlbum, DivPhoto, Checkbox, DivSaveCancel } from './Styled'
import ImageDetails from '../ImageDetails/ImageDetails';
import { useRequestData } from '../../hooks/useRequestData';
import { useEditCollection } from '../../hooks/useRequests';
import { Button } from '../../GlobalStyle';

function MosaicImagesSelect({ setEdit, form, setForm, resetForm, id, update }) {
  const [detailsImageId, setDetailsImageId] = useState(false)
  const [images, getImages] = useRequestData('/images', 'images', [])
  const [EditCollection, loading, success] = useEditCollection(id)
  const onClickCancel = () => {
    resetForm()
    setEdit(false)
  }
  const onClickSave = () => {
    const body = {
      images: images.filter((tag) => {
          return form[`image-${tag.id}`]
      }).map((tag) => {
          return tag.id
      })
  }
  console.log(body)
    EditCollection(body)
  }
  useEffect(() => {
    if(!loading && success){
      update()
      setEdit(false)
    }
  }, [loading])
  return (
    <>
      <DivSaveCancel>
        <Button onClick={onClickSave}>
          Salva
        </Button>
        <Button onClick={onClickCancel}>
          Cancelar
        </Button>
      </DivSaveCancel>
      <DivAlbum>
        {
          images.map(({ id, file, subtitle }) => {
            return (
              <DivPhoto key={id} >
                <input type="checkbox" onChange={setForm} name={"image-" + id} />
                <Checkbox checked={form["image-" + id]} />
                <img src={file} />
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
      {detailsImageId && <ImageDetails imageId={detailsImageId} setImageId={setDetailsImageId} />}
    </>
  );
}

export default MosaicImagesSelect;
