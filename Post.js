import React from 'react';

function Post({ post }) {
  return (
    <div className="card post-card m-2">
      <div className="post-header p-2">
      <img src={post.userImg} alt="post owner" className='user-img rounded-circle me-1'/>
         <h6 className='my-0'>{post.userName}</h6>

      </div>

      <img src={post.imageUrl} className="card-img-top" alt={post.title} />
      <div className="card-body">
      
        <div className="icons-container">
         <i className="fa-regular fa-heart fs-5 m-1"></i>
          <i className="fa-regular fa-comment fs-5 m-1"></i>
          <i className="fa-regular fa-share-from-square fs-5 m-1"></i>
         </div>
        <p className="card-text m-0 fw-bold">{post.likes} likes</p>
        <p className="card-text">
           <span className='fw-bold'>{post.userName}</span> {post.caption}
          </p>
        
      </div>
      <div className='text-secondary p-2'>View all {post.comments.length} comments</div>
    </div>
  );
}

export default Post;