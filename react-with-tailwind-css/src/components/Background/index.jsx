import React from 'react';
import MyImage from './mybg.jpg';

function Background(props) {
    return (
        <>
        {/* <div className=" bg-fixed d bg-center bg-cover bg-no-repeat h-screen" style={{ backgroundImage: `url(${MyImage})` }}>
          <div className="h-full w-full bg-black flex items-center justify-center bg-opacity-50 ">
          <h1 class="text-white text-4xl">Background Fixed</h1>
          </div>
         </div>  */}

{/* <div class="bg-clip-border p-6 bg-indigo-600 border-4 border-indigo-300 border-dashed">some content</div>
<div class="bg-clip-padding p-6 bg-indigo-600 border-4 border-indigo-300 border-dashed my-10">some content</div>
<div class="bg-clip-content p-6 bg-indigo-600 border-4 border-indigo-300 border-dashed">some content</div> */}
          
          {/* <div className="bg-no-repeat bg-left-top  
                bg-gree-200 w-48 h-48  bg-contain
                border-4 my-4" style={{ backgroundImage: `url( 
 https://media.geeksforgeeks.org/wp-content/uploads/20210222211217/Screenshot20210222211207.png)`  }}>
               This deiv has a background image
          </div> */}

          <div className="h-[400px] w-screen border-gray-200 bg-gradient-to-t from-[#202040] via-[#543864]  to-[#FFBD69]">

          </div>

         </>
    );
}

export default Background;
