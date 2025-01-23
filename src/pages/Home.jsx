import React, { useEffect, useState } from "react";
import Search from "../components/Search";
import IntroPost from "../components/IntroPost";
import Blogs from "../components/Blogs";
import Footer from "../components/Footer";
import { getPosts } from "../Services/GlobalAPI";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then((data) => {
      if (data && Array.isArray(data)) {
        setPosts(data);
      } else {
        console.error('Invalid posts data:', data);
      }
    });
  }, []);

  return (
    <div className="container">
      <Search />
      {posts.length > 0 && <IntroPost post={posts[1]} />}
      <Blogs posts={posts} />
      <Footer />
    </div>
  );
}

export default Home;