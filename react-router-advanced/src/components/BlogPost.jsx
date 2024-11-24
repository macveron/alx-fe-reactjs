import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams(); // Extract the dynamic ID from the URL

  return (
    <div>
      <h3>Blog Post {id}</h3>
      <p>Blog content for post {id} goes here.</p>
    </div>
  );
};

export default BlogPost;
