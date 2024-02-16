import React from 'react'
import Template from '../components/Template'
import student from '../assets/student.png'

const Login = ({setIsLoggedIn}) => {
  return (
    <Template 
      title="Welcome Back"
      desc1="Build Skills for today,tommorrow , and beyond."
      desc2="Education to future-proof your career."
      image={student}
      formtype="login"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Login