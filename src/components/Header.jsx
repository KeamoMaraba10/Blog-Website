import React from 'react';
import Logo from './../assets/images/Logo.png';
import { IoMailOutline } from "react-icons/io5";
import { GoHome } from "react-icons/go";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';


function Header() {
  const nav = useNavigate();

  const [message, setMessage] = useState('');

  return (
    <div className="flex justify-between items-center px-4 py-2">
      <img src={Logo} className="w-[180px]" alt="Logo" />
      <ul className="flex gap-4 md:gap-14 items-center">
        <li className="hover:font-bold cursor-pointer flex items-center justify-center" onClick={() => nav('/')}>
          <span className="hidden sm:block">Home</span>
          <GoHome className="block sm:hidden text-[20px]" />
        </li>
        <li className="hover:font-bold cursor-pointer flex items-center justify-center" onClick={() => nav('/AboutMe')}>
          <span className="hidden sm:block">About Me</span>
          <IoMdInformationCircleOutline className="block sm:hidden text-[20px]" />
        </li>
        <li className="hover:font-bold cursor-pointer flex items-center justify-center" onClick={() => nav('/HitMeUp')}>
          <span className="hidden sm:block">Hit Me Up</span>
          <MdOutlinePermContactCalendar className="block sm:hidden text-[20px]" />
        </li>
      </ul>
      <button className="bg-black-500 text-white rounded-full hover:bg-blue flex items-center justify-center px-4 py-2 sm:px-6 sm:py-2" onClick={()=>{setMessage(console.log('Button Clicked'))}}>
        <span className="hidden sm:block">Join Mailing List</span>
        <IoMailOutline className="text-[20px]" />
      </button>
    </div>
  );
}

export default Header;
