import React from 'react';
import { Form as FormMain, Button } from '../../GlobalStyle';
import Input from '../../components/Input/Input'
import { useForm } from '../../hooks/useForm'
import { useGetToken } from '../../hooks/useGetToken';
import {goToSingUp} from '../../router/coordinator'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Form() {
    const initialForm = {
        login: "",
        password: ""
    }
    const [form, setForm] = useForm(initialForm)
    const [post] = useGetToken('/users/login')
    const history = useHistory()
    const submit = (e) => {
        e.preventDefault();
        post(form, history)
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
            <Button type="button" onClick={() => goToSingUp(history)}>
                Sing Up
            </Button>
        </FormMain>
    );
}

export default Form;
