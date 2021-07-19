import React from 'react';
import { Form as FormMain, Button } from '../../GlobalStyle';
import Input from '../../components/Input/Input'
import { useForm } from '../../hooks/useForm'
import {useNewImage} from '../../hooks/useRequests'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useRequestData } from '../../hooks/useRequestData'
import Checkbox from '../../components/Checkbox/Checkbox';
function Form() {
    const initialForm = {
        subtitle: '',
        file: '',
        collection: ''
    }
    const [form, setForm] = useForm(initialForm)
    const [collectionsData] = useRequestData('/collections', 'collections', [])
    const [tagsData] = useRequestData('/tags', 'tags', [])
    const [newImage] = useNewImage()
    const submit = (e) => {
        console.log(form)
        const {subtitle, file, collection} = form;
        e.preventDefault();
        const body = {
            subtitle, file,  
            collections: collectionsData.filter((tag) => {
                return form[`collection-${tag.id}`]
            }).map((tag) => {
                return tag.id
            }),
            tags: tagsData.filter((tag) => {
                return form[`tag-${tag.id}`]
            }).map((tag) => {
                return tag.id
            })
        }
        console.log(body)
        newImage(body)
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
            <Checkbox
                options={tagsData.map(({ name, id }) => {
                    return {
                        text: name,
                        value: `tag-${id}`
                    }
                })}
                onChange={setForm}
            />
             <Checkbox
                options={collectionsData.map(({ name, id }) => {
                    return {
                        text: name,
                        value: `collection-${id}`
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
