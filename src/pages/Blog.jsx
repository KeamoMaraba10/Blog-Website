import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostById } from "../Services/GlobalAPI";

function Blog() {
  const { documentId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    console.log("Fetching post with documentId:", documentId);
    getPostById(documentId).then((data) => {
      console.log("Fetched post data:", data);
      setPost(data);
    }).catch((error) => {
      console.error("Error fetching post:", error);
    });
  }, [documentId]);

  if (!post) {
    return <div className="text-center text-gray-700 mt-10">Post not found!</div>;
  }

  console.log("Post data:", post);

  // Corrected to access the image URL from the Image object
  const imageUrl = post.Image?.url ? `http://localhost:1337${post.Image.url}` : '';
  //const imageUrl = post.attributes?.Image[0]?.url ? `http://localhost:1337${post.attributes.Image[0].url}` : '';

  return (
    <div className="px-10 md:px-15 lg:px-32 mt-10">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={post.attributes?.Image[0]?.alternativeText || post.attributes?.Title}
          className="w-full h-[400px] rounded-2xl object-cover"
        />
      )}
      <div className="mt-10">
        <h2 className="text-blue-500 text-lg uppercase font-semibold">{post.attributes?.Tag}</h2>
        <h1 className="text-3xl font-bold mt-5">{post.Title}</h1>
        <p className="text-gray-700 text-lg mt-5">{post.Description}</p>
        <p className="text-gray-500 text-sm mt-5">
          <strong>Date:</strong> {post.Date}
        </p>
      </div>
      <div className="mt-10 text-gray-800 text-base leading-relaxed">{post.Article}</div>
      <div className="mt-10 flex gap-4">
        <button className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition">
          Like
        </button>
        <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg shadow hover:bg-gray-300 transition">
          Comment
        </button>
      </div>
    </div>
  );
}

export default Blog;