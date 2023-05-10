import React, { useState } from 'react'
import css from './Register.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
const Register = () => {

  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/register", inputs);
      console.log(res);
      navigate("/login");
    } catch (err) {
      setError(err.response.data);
    }
  };


  return (
    <div className={`paddings flexCenter ${css.wrapper}`}>
      <form  className="form" autoComplete='off'>
      <h1>Register</h1>
      <input type="text" placeholder='enter username' required name="username"
          onChange={handleChange} />
      <input type="email" placeholder='enter email' required name="email"
          onChange={handleChange} />
      <input type="password" placeholder='enter your password' required name="password"
          onChange={handleChange} />
      <button type='submit' onClick={handleSubmit} className="btn">Register</button><br />
      {err && <p>{err}</p>}
      <p>Already have an account? <Link to={'/login'}>Login</Link></p>
    </form>
    </div>
  )
}

export default Register