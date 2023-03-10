import React, { useState } from 'react';
import SubmitButton from '../UI/SubmitButton';
import TextArea from '../UI/TextArea';
import FormInput from '../UI/FormInput';
import AddForm from './AddForm';

const TeamForm = () => {
  const [form, setForm] = useState({
    description: '',
  });

  function changeInputValue(event) {
    const { name, type } = event.target

    setForm(prevForm => ({
      ...prevForm,
      [name]: type === 'checkbox' ? event.target.checked : event.target.value
    }));
  }
  return (
    <>
      <AddForm api="http://127.0.0.1:8000/api/v1/createcheck">
        <TextArea placeholder="Описание" name='description' value={form.description} onChange={changeInputValue} type="text" />

        <SubmitButton>Добавить отчёт</SubmitButton>
      </AddForm>
    </>
  )
}

export default TeamForm;