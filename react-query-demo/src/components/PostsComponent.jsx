import React from 'react';
import { useQuery } from 'react-query';

// Fetch posts from JSONPlaceholder API
const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const PostsComponent = () => {
  // Using the useQuery hook to fetch data with advanced configuration
  const { data, error, isLoading, isError, refetch } = useQuery(
    'posts', 
    fetchPosts, 
    {
      // Cache time: Keep the data in the cache for 1 minute (60000ms)
      cacheTime: 60000, 

      // Automatically refetch data when the window is focused
      refetchOnWindowFocus: true,

      // Keep previous data when refetching
      keepPreviousData: true,

      // Set staleTime to 5 minutes (300000 ms)
      staleTime: 300000, // Data is considered fresh for 5 minutes

      // Optionally, you can also set refetch intervals, such as every 30 seconds
      // refetchInterval: 30000, 
    }
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={refetch}>Refetch Posts</button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
