import React, { useContext, useEffect, useState } from 'react'
import css from './Post.module.scss'
import {AiTwotoneEdit, AiFillDelete} from 'react-icons/ai';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Menu from '../../Common/Menu';
import { AuthContext } from '../../../context/authContext.js';
import moment from 'moment';
import axios from 'axios';
import DOMPurify from "dompurify";
const Post = () => {
  const [post, setPost] = useState({});

  const location = useLocation();
  const navigate = useNavigate();

  const postId = location.pathname.split("/")[2];

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`);
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);
  

  const handleDelete = async ()=>{
    try {
      await axios.delete(`/posts/${postId}`);
      navigate("/")
    } catch (err) {
      console.log(err);
    }
  }

  

  return (
    <div className={`paddings innerWidth ${css.wrapper}`}>
      <div className={css.container}>
        <div className={css.post}>
          <img src={`../upload/${post?.img}`} alt="" />
          <div className={css.user}>
           <img
            src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=842"
            alt=""
          />
            <div className={css.info}>
            <span>{post?.username}</span>
            <p>Posted {moment(post.createdAt).fromNow()}</p>
            </div>

            {currentUser ? ( currentUser.username === post.username && (
              
            <div className={css.edit}>
              <Link className={css.link} to={`/create?edit=${postId}`} state= {post}><AiTwotoneEdit/> </Link>
              <Link onClick={handleDelete} className={css.link} to="/"><AiFillDelete /></Link>
            </div>
            )) : null}
            

          </div>

          <h1>{post.title}</h1>
          <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(post.content),
          }}
          >
        </p>
        </div>
        
        <div className={css.menu}>
          <Menu cat={post.cat} />
        </div>
      </div>
    </div>
  )
}

export default Post