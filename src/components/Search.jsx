import React, { useState } from 'react';
import Banner from './../assets/images/BannerCopyInvertedColor.png';
import { CiSearch } from 'react-icons/ci';

function Search() {
  const [activeIndex, setActiveIndex] = useState(null); // State for active tag

  const tags = [
    { id: 1, name: 'All' },
    { id: 2, name: 'Music' },
    { id: 3, name: 'Literature' },
    { id: 4, name: 'Gaming' },
    { id: 5, name: 'Coding' },
  ];

  return (
    <div className='flex justify-center mt-7 flex-col px-[70px] md:px-[100px]'>
      <img src={Banner} className='rounded-2xl ' alt='Banner' />
      <div className='bg-white shadow-lg p-3 rounded-lg mt-[-20px] mx-[25%] flex items-center'>
        <CiSearch className='text-[20px] text-gray-400' />
        <input type='text' placeholder='Search' className='outline-none ml-2' />
      </div>

      {/* Tags */}
      <div className='flex gap-10 justify-center mt-5'>
        {tags.map((item, index) => (
          <ul
            key={item.id}
            className={`cursor-pointer p-2 rounded-lg ${
              index === activeIndex ? 'bg-black text-white' : 'text-black hover:scale-110 hover:border-[1px] border-black transition-all duration-100 ease-in-out'
            }`}
            onClick={() => setActiveIndex(index)} // Set active tag on click
          >
            <li>{item.name}</li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default Search;
