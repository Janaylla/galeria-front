import React from 'react';
import { Form as FormMain, Button} from '../../GlobalStyle';
import Input from '../../components/Input/Input'
import {useForm} from '../../hooks/useForm'

function Form() {
    const initialForm = {
        login: "",
        password: ""
    }
    const [form, setForm] = useForm(initialForm)
    const submit = (e) => {
        e.preventDefault()
    }
  return (
    <FormMain onSubmit={submit}>
        <Input
        label="Login"
        placeholder="Escreva seu nickname/email"
        value={form['login']}
        onChange={setForm}
        type="text"
        name="login"
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
            LogOut
        </Button>
    </FormMain>
  );
}

export default Form;
