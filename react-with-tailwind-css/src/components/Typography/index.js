import React from 'react';

function index(props) {
    return (
       <>
    <div className="text-center  text-red-700 text-3xl font-sans font-medium tracking-wider leading-10 w-80 h-10 border border-black m-10 overflow-hidden truncate">
        Hellow world Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
     </div>
     <hr/>
     <h1 className='text-center text-bold text-5xl text-pink-900 mb-10'>List Style Type</h1>
        <ul className="list-decimal text-center">
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
        </ul>

     <hr className='my-10'/>
     <div className='text-center h-screen bg-[#384f8f] text-white space-y-10'>
     <h1 className='underline lowercase text-5xl text-amber-600'>Placeholder Color</h1>
        <input type="text" className='placeholder-[#f0982d] placeholder-opacity-1' placeholder='Enter your name'/><br/>
        <input type="text" className='' placeholder=''/><br/>
        <input type="text" className='' placeholder=''/><br/>
        <input type="text" className='' placeholder=''/>
        <div className='border border-white border-2xl h-50 w-80 '>
        <h1 className='break-all'>Hellow world Lorem Ipsum is simply dsldkjfal;sdjfal;sjdfal;sdfja;lsjf;alskdfalskdjf;laskdjf;sdkfasllummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with deskt</h1>
        </div>
     </div>

     
       </>
    );
}

export default index;