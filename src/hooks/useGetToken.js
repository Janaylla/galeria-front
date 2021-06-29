import axios from 'axios'
import {baseUrl} from '../constants/urls'
export const useGetToken = (path) => {
  const post = (body) => {
    console.log(body)
    axios.post(`${baseUrl}${path}`, body).then((res)=>{
        alert("Deu Bom");
    }).catch((err) => {
      alert("Deu Ruin");
      console.log(err);
    })
  }
  return [post]
};