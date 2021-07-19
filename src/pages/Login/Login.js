import React from 'react';
import { DivAuthentication } from '../../GlobalStyle';
import Form from './Form'

function Login() {
  return (
    <DivAuthentication>
        <div>
          <h1>Login</h1>
          <Form/>
        </div>
    </DivAuthentication>
  );
}

export default Login;
