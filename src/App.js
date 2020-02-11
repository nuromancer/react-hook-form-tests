import React from 'react';
// import ReactDOM from 'react-dom';
import { useForm } from 'react-hook-form';
import './styles.css';

const App = () => {
  const onSubmit = data => {
    alert(JSON.stringify(data));
  };

  const { register, handleSubmit } = useForm();

  return (
    <form className="App" onSubmit={handleSubmit(onSubmit)}>
      <h1>Sign Up</h1>
      <label>First Name:</label>
      <input name="firstName" ref={register} />

      <label>Last Name:</label>
      <input name="firstName" ref={register} />

      <label>Gender</label>
      <select name="gender">
        <option>Select...</option>
        <option>Male</option>
        <option>Female</option>
      </select>

      <label>Username</label>
      <input name="username" ref={register} />

      <label>Email</label>
      <input name="email" ref={register} />

      <label>About you</label>
      <textarea name="about you" />

      <input type="submit" ref={register} />
    </form>
  );
};

export default App;
// const rootElement = document.getElementById('root');
// ReactDOM.render(<App />, rootElement);
