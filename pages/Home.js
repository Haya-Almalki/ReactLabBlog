import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Home = () => {
  const [blog, setBlog] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlog = async () => {
      const request = await fetch('http://localhost:8080/api/v1/blog');
      const data = await request.json();
      setBlog(data);
    };
    fetchBlog();
  }, []);

  const goToAdd = () => {
    navigate('/add');
  };

  return (
    <>
    <br></br><br></br>
    <div className='container text-center'>
      <h1 className=''>Blog Web</h1>
      <hr />
      <ul class="list-group">
        {blog.map((blog) => (
          <li key={blog.id} id={blog.id} className='list-group-item'>
            <Link to={`/details/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
      <hr />
      <button
        onClick={goToAdd}
        class='btn btn-secondary w-100 btn-lg'
        type='button'
      >
        Add Blog
      </button>
    </div></>
  );
};

export default Home;