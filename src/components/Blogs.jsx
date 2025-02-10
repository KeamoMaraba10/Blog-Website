import React from 'react';
import { useNavigate } from 'react-router-dom';

function Blogs({ posts }) {
  const navigate = useNavigate();

  return (
    <div className="blogs-container px-10 md:px-15 lg:px-32 mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
      {posts.map((post) => {
        // Corrected to access the image URL from the Image object
        const imageUrl = post.Image?.url ? `http://localhost:1337${post.Image.url}` : '';

        return (
          <div key={post.documentId} className="blog-post cursor-pointer" onClick={() => navigate('blogs/' + post.documentId)}>
            {imageUrl && (
              <img
                src={imageUrl}
                alt={post.Image?.alternativeText || post.Title}
                className="w-full h-64 rounded-2xl object-cover"
              />
            )}
            <div className="mt-4">
              <h2 className="text-blue-500">{post.Tag}</h2>
              <h2 className="text-[23px] font-bold mt-2">
                <strong>{post.Title}</strong>
              </h2>
              <p className="line-clamp-6 text-gray-700 mt-2">{post.Description}</p>
              <p className="mt-2">
                <strong>Date:</strong> {post.Date}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Blogs;
