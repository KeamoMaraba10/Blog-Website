import React, { useState, useEffect } from 'react';
import { CiSearch } from 'react-icons/ci';
import Banner from './../assets/images/BannerCopyInvertedColor.png'; // Adjust the path as needed
import { getPosts } from '../Services/GlobalAPI';
import Blogs from './Blogs';

function Search() {
  const [activeIndex, setActiveIndex] = useState(0); // State for active tag
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const tags = [
    { id: 1, name: 'All', color: 'bg-gray-200' },
    { id: 2, name: 'Music', color: 'bg-blue-500' },
    { id: 3, name: 'Literature', color: 'bg-orange-500' },
    { id: 4, name: 'Gaming', color: 'bg-red-500' },
    { id: 5, name: 'Coding', color: 'bg-green-500' },
  ];

  useEffect(() => {
    getPosts().then((data) => {
      setPosts(data);
      setFilteredPosts(data); // Initially display all posts
    });
  }, []);

  const handleTagClick = (index, tagName) => {
    setActiveIndex(index);
    if (tagName === 'All') {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(posts.filter(post => post.Tag === tagName));
    }
  };

  const handleSearch = () => {
    if (searchQuery.trim() === '') {
      setFilteredPosts(posts);
    } else {
      const lowerCaseQuery = searchQuery.toLowerCase();
      setFilteredPosts(posts.filter(post =>
        post.Title.toLowerCase().includes(lowerCaseQuery) ||
        post.Description.toLowerCase().includes(lowerCaseQuery) ||
        post.Article.toLowerCase().includes(lowerCaseQuery) ||
        post.Tag.toLowerCase().includes(lowerCaseQuery)
      ));
    }
  };

  return (
    <div className='flex justify-center mt-7 flex-col px-[70px] md:px-[100px]'>
      <img src={Banner} className='rounded-2xl ' alt='Banner' />
      <div className='bg-white shadow-lg p-3 rounded-lg mt-[-20px] mx-[25%] flex items-center'>
        <CiSearch className='text-[20px] text-gray-400 cursor-pointer' onClick={handleSearch} />
        <input
          type='text'
          placeholder='Search'
          className='outline-none ml-2'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
        />
      </div>

      {/* Tags */}
      <div className='flex gap-10 justify-center mt-5'>
        {tags.map((item, index) => (
          <ul
            key={item.id}
            className={`cursor-pointer p-2 rounded-lg ${
              index === activeIndex ? `${item.color} text-white` : 'text-black hover:scale-110 hover:border-[1px] border-black transition-all duration-100 ease-in-out'
            }`}
            onClick={() => handleTagClick(index, item.name)} // Set active tag on click
          >
            <li>{item.name}</li>
          </ul>
        ))}
      </div>

      {/* Display filtered posts */}
      <Blogs posts={filteredPosts} />
    </div>
  );
}

export default Search;