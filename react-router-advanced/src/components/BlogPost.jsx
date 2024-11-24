// src/components/BlogPost.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  // Extract the dynamic "id" parameter from the URL
  const { id } = useParams();

  return (
    <div>
      <h2>Blog Post {id}</h2>
      <p>This is the content for blog post {id}. You can fetch or display content based on this id.</p>
    </div>
  );
};

export default BlogPost;
