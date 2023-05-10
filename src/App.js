import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Login from './components/pages/Login/Login';
import Register from './components/pages/Register/Register';
import Post from './components/pages/Post/Post';

import CreatePost from "./components/pages/Create/CreatePost";
import Navbar from "./components/Common/Navbar";
import Footer from "./components/Common/Footer";
import Home from "./components/pages/Home/Home";

const Layout = () => {
  return (
    
    <><Navbar /><Outlet /><br/><Footer /></>
    
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path:"/",
        element: <Home/>
      },
      {
        path: "/create",
        element: <CreatePost/>,
      },
      {
        path: "/post/:id",
        element: <Post/>,
      },
    ]
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
  
]);



function App() {
  return (
    <div>
      <RouterProvider router = {router} />
    </div>
  );
};

export default App;
