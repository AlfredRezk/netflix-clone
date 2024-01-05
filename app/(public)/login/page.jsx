"use client"
import {loginFormFields} from '@/constants/constants'
import { Field, Form, Formik } from 'formik';
import GoogleIcon from '@/public/icons/GoogleIcon';
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';

export default function Login() {
    const {signupProvider, signIn,  forgotPassword} = useAuth()
    const initialValues = { email: '', password: ''}

  const handleSubmit = (values, actions)=>{
  
    signIn(values.email, values.password)
  }

  return (

    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className='flex flex-col item-stretch'>

      <h2 className='text-red-600 text-2xl font-[500] text-center mb-3'>Sign Up</h2>

      {loginFormFields.map(field=>(
        <div className='relative mb-6 z-0'>
          <Field type={field.type} name={field.name} id={field.name} placeholder=" " className="peer"/>
          <label htmlFor={field.name}> {field.label}</label>
        </div>
      ))}
      
      <div className="flex justify-between">

        <span onClick={()=> forgotPassword()}
          className='py-3 font-[0.75rem] cursor-pointer text-gray-500 hover:text-red-500 transition-colors'
        > 
        Forgot Password </span>
        <Link href='/register' className='py-3 font-[0.75rem] cursor-pointer text-gray-500 hover:text-red-500 transition-colors'> Sign Up</Link>
      </div>

      <button className='btn-danger mb-5' type='submit'>
          Login
      </button>
      <button className='btn-danger flex items-center justify-between' type='button' onClick={()=> signupProvider()}>
        <span>Continue with Google </span>
        <GoogleIcon/>
      </button>

      </Form>


    </Formik>


  )
}
