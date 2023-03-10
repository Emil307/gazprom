import React, { useState } from 'react';
import styled from 'styled-components';
import AddForm from './AddForm';
import FormInput from '../UI/FormInput';
import SubmitButton from '../UI/SubmitButton';

const Select = styled.select`
  margin-bottom: 33px;
  width: calc(100% - 8px);
  border-bottom: 1px rgba(0, 0, 0, .2) solid;
  padding-left: 4px;
  padding-right: 4px;
  padding-bottom: 10px;

  font-family: Inter, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #666 ;
`

const WellForm = () => {
  const [form, setForm] = useState({
    conditions: '',
    geo: '',
    status: '',
  });

  function changeInputValue(event) {
    const { name, type } = event.target

    setForm(prevForm => ({
      ...prevForm,
      [name]: type === 'checkbox' ? event.target.checked : event.target.value,
    }));
  }
  return (
    <>
      <AddForm api="http://127.0.0.1:8000/api/v1/createwell">
        <Select name="status" value={form.status} onChange={changeInputValue}>
          <option value="1">Рабочая</option>
          <option value="2">Законсервированная</option>
          <option value="3">Требуется ремонт</option>
        </Select>
        <FormInput placeholder="Координаты" name='geo' value={form.geo} onChange={changeInputValue} type="text" />
        <FormInput placeholder='опишите состояние' name='conditions' value={form.conditions} onChange={changeInputValue} type="text" />

        <SubmitButton>Создать Скважину</SubmitButton>
      </AddForm>
    </>
  )
}

export default WellForm;