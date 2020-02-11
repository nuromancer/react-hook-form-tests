import React from 'react'
import { useForm } from 'react-hook-form'

export default function App() {
  const { register, handleSubmit } = useForm()

  const logSubmit = data => console.log(data)

  return (
    <form onSubmit={handleSubmit(logSubmit)}>
      <input name="firstName" ref={register} />
      <select name="gender" ref={register}>
        <option value="male">male</option>
        <option value="female">female</option>
      </select>
      <input type="submit" />
    </form>
  )
}
