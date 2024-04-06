import * as yup from 'yup';
import { ref } from "yup";


// export const signupschema = yup.object().shape({
//   email: yup
//     .string()
//     .email("Please enter valid Email")
//     .required('Email Address is Required'),
//   name: yup.string().required('Please Enter Your Name'),
//   number: yup.number().required('Please Enter Your Mobile Number').min(10 , "reuiresd"),
//   password: yup
//     .string().required('Please create a password'),
//   confirmPassword: yup 
//   .string()
//   .required("Please confirm your password")
//   .oneOf([ref("password")], "Passwords do not match"),
// })


export const aboutContactValidaion = yup.object().shape({
    fullName: yup.string().required('Please Enter Your Name'),
    phoneNumber: yup.number().required('Please Enter Your Mobile Number').min(10 , "Minimum 10 Numbers"),
    email: yup.string().email("Please enter valid Email").required('Email Address is Required')
})