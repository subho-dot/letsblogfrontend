import React, { useContext, useState } from 'react';
import css from './Login.module.scss';
import {Link, useNavigate} from 'react-router-dom';
import { AuthContext } from '../../../context/authContext.js';


const Login = () => {

  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);


  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(inputs);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login(inputs);
      console.log(res);
      navigate("/");
      
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className={`paddings flexCenter ${css.wrapper}`}>
      <form  className="form" autoComplete='off'>
      <h1>Login</h1>
      <input required type="text" placeholder='enter username' autoComplete='off' name="username"
          onChange={handleChange} />
      <input required type="password"  autoComplete='off' name="password"
          onChange={handleChange} />
      <button type='submit' className="btn" onClick={handleSubmit}>Login</button><br />
      {err && <p>{err}</p>}
      <p>Don't have an account? <Link to={'/register'}>Register</Link></p>
    </form>
    </div>
  )
}

export default Login