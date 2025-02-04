import React from 'react';
import Post from './Post';

function PostGrid({ posts }) {
  return (
    <div className="post-grid">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostGrid;