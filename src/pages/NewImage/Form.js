import React from 'react';
import { Form as FormMain, Button } from '../../GlobalStyle';
import Input from '../../components/Input/Input'
import { useForm } from '../../hooks/useForm'
import { useNewImage } from '../../hooks/useRequests'
import { useRequestData } from '../../hooks/useRequestData'
import Checkbox from '../../components/Checkbox/Checkbox';
import { DivImg, DivBasicsInformation, DivInputs } from './Styled'
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
        const { subtitle, file, collection } = form;
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
            <DivBasicsInformation>
                <DivImg>
                    <img src={form['file']} />
                </DivImg>
                <DivInputs>
                    <Input
                        label="Título"
                        placeholder="Escreva o subtítulo da imagem"
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
                </DivInputs>
            </DivBasicsInformation>
            <Checkbox
                options={tagsData.map(({ name, id }) => {
                    return {
                        text: name,
                        value: id
                    }
                })}
                onChange={setForm}
                title="Tags"
                prefix="tag"
                form={form}
            />
            <Checkbox
                options={collectionsData.map(({ name, id }) => {
                    return {
                        text: name,
                        value: id
                    }
                })}
                onChange={setForm}
                title="Coleções"
                prefix="collection"
                form={form}
            />
            <Button type="submit">
                Nova Imagem
            </Button>
        </FormMain>
    );
}

export default Form;
