import React from 'react';
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { DivContainer, H2 } from '../../GlobalStyle'
import Header from '../../components/Header/Header';
import { goToNewImage } from '../../router/coordinator'
import MosaicImages from '../../components/MosaicImages/MosaicImages';
import {useRequestData} from '../../hooks/useRequestData';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useState } from 'react/cjs/react.development';
import MosaicImagesSelect from '../../components/MosaicImagesSelect/MosaicImagesSelect';
import { useForm } from '../../hooks/useForm'

function Collection() {
  useProtectedPage();
  const {id} = useParams();
  const [images, getImages] = useRequestData(`/images/collection/${id}`, 'images', [])
  const [edit, setEdit] = useState(false)
  const initialImage = {}
  
  images.forEach(({id}) => {
      initialImage["image-"+id] = true;
  });

  const [form, setForm, resetForm] = useForm(initialImage)

  return (
    <DivContainer>
      <Header text="Nova imagem" goTo={goToNewImage} />
      <H2>Número de fotos encontradas: {images.length} </H2>
      <H2><a onClick={() => setEdit(true)}>Click aqui para editar essa coleção</a></H2>
      
     {edit ? <MosaicImagesSelect selectedImages={images} setEdit={setEdit} form={form}setForm={setForm} resetForm={resetForm} id={id} update={getImages}/>:
       <MosaicImages images={images} />}
    </DivContainer>
  );
}

export default Collection;
