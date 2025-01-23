import React from 'react';
import image from './../assets/images/KeamoHeadshot.jpg';

function AboutMe() {
  return (
    <div className="px-10 md:px-15 lg:px-32 mt-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-5">About Me</h1>
      <img
        src={image}
        alt="Profile"
        className="w-[200px] h-[200px] rounded-full object-cover mx-auto mb-10"
      />
      <div className="text-gray-700 text-lg leading-relaxed">
        <p className="mb-5">
          Hi, I'm Keamo, your awesomeness guru!😊 Please look around and enjoy some of my 
          spiciest takes on things that matter to me the most
        </p>
        <p className="mb-5">
          I spend most of my
           time either surfing the web, listening to music, playing video games, watching movies and slacking off in general, so you <strong>KNOW</strong> my opinion matters😉
        </p>
        <p className="mb-5">
          I'd love to hear from you, so leave me a message in the ContactMe section. I hope you enjoy my little space on the internet!
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
