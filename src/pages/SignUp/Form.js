import React from 'react';
import { Form as FormMain, Button} from '../../GlobalStyle';
import Input from '../../components/Input/Input'
import {useForm} from '../../hooks/useForm'
import { useGetToken } from '../../hooks/useGetToken';

function Form() {
    const initialForm = {
        login: "",
        password: ""
    }
    const [form, setForm] = useForm(initialForm)
    const [post] = useGetToken('/user/login')
    const submit = (e) => {
        e.preventDefault();
        post(form)
    }
  return (
    <FormMain onSubmit={submit}>
        <Input
        label="Login"
        placeholder="Escreva seu nickname/email"
        value={form['email']}
        onChange={setForm}
        type="text"
        name="email"
        error={''}
        required
        />
           <Input
        label="Senha"
        placeholder="Escreva sua senha"
        value={form['password']}
        onChange={setForm}
        type="password"
        name="password"
        error={''}
        required
        />
        <Button type="submit">
            Login
        </Button>
        <Button type="button">
            Sing Up
        </Button>
    </FormMain>
  );
}

export default Form;
