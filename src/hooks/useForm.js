import { useState } from "react";

export const useForm = (initialForm) => {
  const [form, setForm] = useState(initialForm);

  const onChange = (event) => {
    const { name, value, type, checked } = event.target;
    if(type === 'checkbox'){
      setForm({ ...form, [name]: checked });
    }
    else{
      setForm({ ...form, [name]: value });
    }
  };
  const resetForm = () => {
    setForm(initialForm);
  };

  return [form, onChange, resetForm];
};