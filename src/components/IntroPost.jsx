import React from 'react';
import { useNavigate } from 'react-router-dom';

function IntroPost({ post }) {
  const navigate = useNavigate();
  const imageUrl = post.Image[0]?.url ? `http://localhost:1337${post.Image[0].url}` : '';

  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 mt-10 px-10 md:px-15 lg:px-32 gap-8 cursor-pointer' onClick={() => navigate('blog/' + post.id)}>
        <img
          src={imageUrl}
          alt={post.Title}
          className='w-full h-full rounded-2xl object-cover'
        />
        <div>
          <h2 className='text-blue-500'>{post.Tag}</h2>
          <h2 className='text-[23px] font-bold mt-5'>
            <strong>{post.Title}</strong>
          </h2>
          <p className='line-clamp-6 text-gray-700 mt-5'>{post.Description}</p>
          <p>
            <strong>Date:</strong> {post.Date}
          </p>
        </div>
      </div>
    </div>
  );
}

export default IntroPost;
