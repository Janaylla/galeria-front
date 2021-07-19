import React from 'react';
import Header from '../../components/Header/Header';
import { goToHome } from '../../router/coordinator';
import {DivForm} from './Styled'
import Form from './Form'
function NewImage() {

  return (
    <div>
      <Header text="Página inicial" goTo={goToHome} pageCurrent="NewImage" />
      <DivForm>
        <Form />
      </DivForm>
    </div>
  );
}

export default NewImage;
