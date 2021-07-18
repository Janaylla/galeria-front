import axios from "axios";
import { useEffect, useState } from "react";
import { baseUrl } from "../constants/urls";

export const useRequestData = (path, keyObject, initialState) => {
  const [data, setData] = useState(initialState);
  const headers = {
    authorization: window.localStorage.getItem('token')
  }
  const getData = () => {
      axios
        .get(`${baseUrl}${path}`, {
          headers
        })
        .then((response) => {
          setData(response.data[keyObject]);
        })
        .catch((err) =>{
          console.log(err)
        });
  };

  useEffect(() => {
    getData();
  }, []);

  return ([data, getData])

}