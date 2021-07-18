import axios from 'axios'
import {baseUrl} from '../constants/urls'
import {goToHome} from '../router/coordinator'
export const useGetToken = (path) => {
  const post = (body, history) => {
    axios.post(`${baseUrl}${path}`, body).then((res)=>{
        window.localStorage.setItem('token', res.data.token)
        goToHome(history)
    }).catch((err) => {
      alert("Tente novamente");
      console.log(err);
    })
  }
  return [post]
};