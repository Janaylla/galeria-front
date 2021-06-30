import React from 'react';
import { Form as FormMain, Button } from '../../GlobalStyle';
import Input from '../../components/Input/Input'
import { useForm } from '../../hooks/useForm'
import { useGetToken } from '../../hooks/useGetToken';
import {goToLogin} from '../../router/coordinator'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
function Form() {
    const initialForm = {
        name: '',
        email: '',
        nickname: '',
        password: ""
    }
    const [form, setForm] = useForm(initialForm)
    const [post] = useGetToken('/user/signup')
    const history = useHistory()
    const submit = (e) => {
        e.preventDefault();
        post(form, history)
    }
    return (
        <FormMain onSubmit={submit}>
            <Input
                label="Nome"
                placeholder="Escreva seu nome"
                value={form['name']}
                onChange={setForm}
                type="text"
                name="name"
                error={''}
                required
            />
            <Input
                label="Nickname"
                placeholder="Escolha o seu nickName"
                value={form['nickname']}
                onChange={setForm}
                type="text"
                name="nickname"
                error={''}
                required
            />
            <Input
                label="Email"
                placeholder="Escreva seu Email"
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
                Cadastrar
            </Button>
            <Button type="button" onClick={() => goToLogin(history)}>
                Login
            </Button>
        </FormMain>
    );
}

export default Form;
