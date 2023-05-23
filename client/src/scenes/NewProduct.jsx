
import React, {useState} from "react"
import { useGetIdentity } from "@pankod/refine-core";
import { useForm} from '@pankod/refine-react-hook-form';
import { useNavigate } from "react-router-dom";
import Form from '../component/productsComponent/Form'

const NewProduct = () => {
  const navigate=useNavigate();
  const {data: user}=useGetIdentity();
  const { refineCore: {onFinish, formLoading}, register, handleSubmit }=useForm();

  const onFinishHandler = () =>{}

  
  return (
    <Form
      type="Create"
      register={register}
      onFinish={onFinish}
      formLoading={formLoading}
      onFinishHandler={onFinishHandler} 
      handleSubmit={handleSubmit}
    />
    )

  }

export default NewProduct