import React, {useEffect} from 'react';
import { Form as FormMain, Button } from '../../GlobalStyle';
import Input from '../../components/Input/Input'
import { useForm } from '../../hooks/useForm'
import {  useNewCollection } from '../../hooks/useRequests';

function Form({updateCollection, setShowModel}) {
    const initialForm = {
        name: ""
    }
    const [form, setForm, resetForm] = useForm(initialForm)
    const [post, loading, success] = useNewCollection(form)
    const submit = (e) => {
        e.preventDefault();
        console.log(form)
        post(form)
    }
    useEffect(() => {
        if(loading === false && success === true){
            updateCollection()
            resetForm()
            setShowModel(false)
        }
    }, [loading])

    return (
        <FormMain onSubmit={submit}>
            <Input
                label="Nome"
                placeholder="Nome da nova coleção"
                value={form['name']}
                onChange={setForm}
                type="text"
                name="name"
                error={''}
                required
            />
            <Button type="submit">
                Adicionar
            </Button>
        </FormMain>
    );
}

export default Form;
