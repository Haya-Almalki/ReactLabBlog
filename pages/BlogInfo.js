import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
const BlogInfo = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const params = useParams();
  const id = params.id;

  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogDetails = async () => {
      const request = await fetch('http://localhost:8080/api/v1/blog/' + id);
      const data = await request.json();
      setTitle(data.title);
      setBody(data.body);
    };
    fetchBlogDetails();
  }, []);

  const goBackHandler = () => {
    navigate(-1);
  };

  return (
    <div className='container '>
      <h1 className='text-center'>Blog Details</h1>
      <div class=' mt-5'>
        <label class='form-label'>Blog title</label>
        <input readOnly value={title} type='text' class='form-control' />
        <label class='form-label mt-3'>Blog body</label>
        <textarea rows='15' readOnly value={body} class='form-control ' />
      </div>
      <button
        onClick={goBackHandler}
        type='button'
        class='btn btn-secondary mt-3 w-100'
      >
        Go Back
      </button>
    </div>
  );
};

export default BlogInfo;