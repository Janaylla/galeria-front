import React from 'react';
import { Form as FormMain, Button } from '../../GlobalStyle';
import Input from '../../components/Input/Input'
import { useForm } from '../../hooks/useForm'
import { goToLogin } from '../../router/coordinator'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useRequestData } from '../../hooks/useRequestData'
import Select from '../../components/Select/Select';
import Checkbox from '../../components/Checkbox/Checkbox';
function Form() {
    const initialForm = {
        subtitle: '',
        file: '',
        collection: ''
    }
    const [form, setForm] = useForm(initialForm)
    const [collection] = useRequestData('/collections', 'collections', [])
    const [tagsData] = useRequestData('/tags', 'tags', [])
    const history = useHistory()
    const submit = (e) => {
        console.log(form)
        const {subtitle, file, collection} = form;
        e.preventDefault();
        const body = {
            subtitle, file,  collection,
            tags: tagsData.filter((tag) => {
                return form[tag.id]
            }).map((tag) => {
                return tag.id
            })
        }
    }
    return (
        <FormMain onSubmit={submit}>
            <Input
                label="Título"
                placeholder="Escreva seu título"
                value={form['subtitle']}
                onChange={setForm}
                type="text"
                name="subtitle"
                error={''}
                required
            />
            <Input
                label="Caminho"
                placeholder="Digite o caminho da imagem"
                value={form['file']}
                onChange={setForm}
                type="text"
                name="file"
                error={''}
                required
            />
            <Select
                options={collection.map(({ name, id }) => {
                    return {
                        text: name,
                        value: id
                    }
                })}
                label="ui"
                name="collection"
                onChange={setForm}
                value={form['collection']}
            />
            <Checkbox
                options={tagsData.map(({ name, id }) => {
                    return {
                        text: name,
                        value: id
                    }
                })}
                onChange={setForm}
            />
            <Button type="submit">
                Nova Imagem
            </Button>
        </FormMain>
    );
}

export default Form;
