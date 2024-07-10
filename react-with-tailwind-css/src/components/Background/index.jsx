import React from 'react';
import MyImage from './mybg.jpg';

function Background(props) {
    return (
        <div className=" bg-fixed d bg-center bg-cover bg-no-repeat h-screen" style={{ backgroundImage: `url(${MyImage})` }}>
          <div className="h-full w-full bg-black bg-opacity-50 flex items-center justify-center">
          <h1 class="text-white text-4xl">Background Fixed</h1>
          </div>
         </div> 
    );
}

export default Background;
