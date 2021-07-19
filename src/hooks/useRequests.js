import axios from 'axios'
import { useState } from 'react/cjs/react.development';
import { baseUrl } from '../constants/urls';

const headers = {
  authorization: window.localStorage.getItem('token')
}
export const useNewImage = () => {
  const newImage = (body) => {
    axios.post(`${baseUrl}/images`, body, {
      headers
    }).then((res) => {
      alert("Foi");
    }).catch((err) => {
      alert("Tente novamente");
      console.log(err);
    })
  }
  return [newImage]
}

export const useNewCollection = (body) => {
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const newCollection = () => {
    setLoading(true)
    setSuccess()
    axios.post(`${baseUrl}/collections`, body, {
      headers
    }).then((res) => {
      setSuccess(true)
      setLoading(false)
    }).catch((err) => {
      alert("Tente novamente");
      console.log(err);
      setSuccess(false)
      setLoading(false)
    })

  }
  return [newCollection, loading, success]
}