import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import css from './Home.module.scss';


// const posts = [
//     {
//       id: 1,
//       title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
//       desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
//       img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     },
//     {
//       id: 2,
//       title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
//       desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
//       img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     },
//     {
//       id: 3,
//       title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
//       desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
//       img: "https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     },
//     {
//       id: 4,
//       title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
//       desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
//       img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     },
//   ];
const Home = () => {

  const [posts, setPosts] = useState([]);

  const cat = useLocation().search

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);

  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }


  return (
    <div className={`innerWidth paddings flexCenter ${css.wrapper}`}>
      <div className={css.container}>
        {posts.map((post) => (
          <div className={`flexCenter ${css.post}`} key={post._id}>
            <div className={css.img}>
            <img src={`../upload/${post.img}`}alt="" />
          </div>
          <div className={css.content}>
            <Link className={css.link} to={`/post/${post._id}`} ><h1>{post.title}</h1>
            <p>{getText(post.content)}</p>
            <button className={css.btn}>Read More</button>
            </Link>
          </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home