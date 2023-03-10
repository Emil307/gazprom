import React, { useState } from 'react';
import styled from 'styled-components';
import AddForm from './AddForm';
import FormInput from '../UI/FormInput';
import FormLabel from '../UI/FormLabel';
import SubmitButton from '../UI/SubmitButton';

const LabelsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 33px;
`

const LabelText = styled.span`
  font-family: Inter, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #888;
`

const TeamForm = () => {
  const [form, setForm] = useState({
    login: '',
    password: '',
    name: '',
    surname: '',
    isAdmin: false,
    isDeveloper: false,
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
      <AddForm api="http://127.0.0.1:8000/api/v1/registration">
        <FormInput placeholder="E-mail" name='login' value={form.login} onChange={changeInputValue} type="email" />
        <FormInput placeholder="Пароль" name='password' value={form.password} onChange={changeInputValue} type="text" />
        <FormInput placeholder="Имя" name='name' value={form.name} onChange={changeInputValue} type="text" />
        <FormInput placeholder="Фамилия" name='surname' value={form.surname} onChange={changeInputValue} type="text" />
        <LabelsWrapper>
          <FormLabel htmlFor="admin">
            <LabelText>Администратор</LabelText>
            <input type="checkbox" name="isAdmin" value={form.isAdmin} onChange={changeInputValue} id="admin" />
          </FormLabel>
          <FormLabel htmlFor="developer">
            <LabelText>Разработчик</LabelText>
            <input type="checkbox" name="isDeveloper" value={form.isDeveloper} onChange={changeInputValue} id="developer" />
          </FormLabel>
        </LabelsWrapper>
        <SubmitButton>Создать пользователя</SubmitButton>
      </AddForm>
    </>
  )
}

export default TeamForm;