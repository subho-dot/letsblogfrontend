import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import css from '../Common/Common.module.scss';
import { BiPencil } from "react-icons/bi";
import { AuthContext } from '../../context/authContext.js';
const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  return (
    <div className={`xPaddings ${css.wrapper}`}>
      <div className={css.logo}><Link to="/" className={css.link}><h2>letsBlog</h2></Link></div>
      <div className={css.links}>
        <Link className={css.link} to="/?cat=food">Food</Link>
        <Link className={css.link} to="/?cat=art">Art</Link>
        <Link className={css.link} to="/?cat=news">News</Link>
        <Link className={css.link} to="/?cat=technology">Technology</Link>
        <Link className={css.link} to="/?cat=sports">Sports</Link>
        <b><span>{currentUser?.username}</span></b>
          {currentUser ? (<>
            <b><span onClick={logout} ><Link  to = {"/"}>Logout</Link></span></b>
            <span className={css.write}><Link to={'/create'}><BiPencil className={css.pen}/></Link></span></>
          ) : (
            <>
            <b><Link className="link" to="/login">
              Login
            </Link></b>
            <b><Link className="link" to="/register">
            Register
          </Link></b>
          </>
          ) }
        
      </div>
    </div>
  )
}

export default Navbar