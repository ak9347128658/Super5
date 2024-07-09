import React from 'react';

function FlexBox(props) {
    return (
        <>
        {/* flex direction */}
        <div className='container mx-auto p-4"'>
        {/* <!-- Row Direction --> */}
        <h2 class="text-xl font-semibold mb-2">Row Direction</h2>
        <div class="flex flex-row bg-gray-200 p-4 mb-4">
            <div class="bg-blue-500 text-white p-4">Item 1</div>
            <div class="bg-green-500 text-white p-4 ml-4">Item 2</div>
            <div class="bg-red-500 text-white p-4 ml-4">Item 3</div>
        </div>

        {/* <!-- Row Reverse Direction --> */}
        <h2 class="text-xl font-semibold mb-2">Row Reverse Direction</h2>
        <div class="flex flex-row-reverse bg-gray-200 p-4 mb-4">
            <div class="bg-blue-500 text-white p-4">Item 1</div>
            <div class="bg-green-500 text-white p-4 mr-4">Item 2</div>
            <div class="bg-red-500 text-white p-4 mr-4">Item 3</div>
        </div>

        {/* <!-- Column Direction --> */}
        <h2 class="text-xl font-semibold mb-2">Column Direction</h2>
        <div class="flex flex-col bg-gray-200 p-4 mb-4">
            <div class="bg-blue-500 text-white p-4 mb-4">Item 1</div>
            <div class="bg-green-500 text-white p-4 mb-4">Item 2</div>
            <div class="bg-red-500 text-white p-4">Item 3</div>
        </div>

        {/* <!-- Column Reverse Direction --> */}
        <h2 class="text-xl font-semibold mb-2">Column Reverse Direction</h2>
        <div class="flex flex-col-reverse bg-gray-200 p-4 mb-4">
            <div class="bg-blue-500 text-white p-4 mb-4">Item 1</div>
            <div class="bg-green-500 text-white p-4 mb-4">Item 2</div>
            <div class="bg-red-500 text-white p-4">Item 3</div>
        </div>
        </div>
        {/* flex wrap */}
        <div className='container h-screen mx-auto p-4 border-l-orange-900'>
        <h1 class="text-3xl font-bold mb-4">Tailwind CSS Flex Wrap Examples</h1>
            <div className='flex flex-wrap  bg-gray-200 p-4'>
              <div className='text-white p-4 m-2 bg-blue-500 '>item 1</div>
              <div className='text-white p-4 m-2 bg-green-500 '>item 2</div>
              <div className='text-white p-4 m-2 bg-red-500 '>item 3</div>
              <div className='text-white p-4 m-2 bg-yellow-500 '>item 4</div>
              <div className='text-white p-4 m-2 bg-purple-500 '>item 5</div>
              <div className='text-white p-4 m-2 bg-pink-500 '>item 6</div>
            </div>
            <div className='flex flex-wrap-reverse my-10 bg-gray-200 p-4'>
              <div className='text-white p-4 m-2 bg-blue-500 '>item 1</div>
              <div className='text-white p-4 m-2 bg-green-500 '>item 2</div>
              <div className='text-white p-4 m-2 bg-red-500 '>item 3</div>
              <div className='text-white p-4 m-2 bg-yellow-500 '>item 4</div>
              <div className='text-white p-4 m-2 bg-purple-500 '>item 5</div>
              <div className='text-white p-4 m-2 bg-pink-500 '>item 6</div>
            </div>
            <h1 class="text-3xl font-bold mb-4">Tailwind CSS Flex Grow Examples</h1>
            <div className="bg-gray-200 p-4 my-8 flex">
              <div className="text-white p-4 m-2 bg-red-500   flex-grow-[1]" >item 1</div>
              <div className="text-white p-4 m-2 bg-green-500 flex-grow-[3]" >item 2</div>
              <div className="text-white p-4 m-2 bg-blue-500  flex-grow-[5]" >item 3</div>
            </div>
            <h1 class="text-3xl font-bold mb-4">Tailwind CSS Flex Shrink Examples</h1>
            <div className="bg-gray-200 p-4 my-8 flex">
              <div className="text-white p-4 m-2 bg-red-500   flex-shrink" >item 1</div>
              <div className="text-white p-4 m-2 bg-green-500 flex-shrink-0" >item 2</div>
              <div className="text-white p-4 m-2 bg-blue-500  flex-shrink" >item 3</div>
              <div className="text-white p-4 m-2 bg-red-500   flex-shrink" >item 1</div>
              <div className="text-white p-4 m-2 bg-green-500 flex-shrink-0" >item 2</div>
              <div className="text-white p-4 m-2 bg-blue-500  flex-shrink" >item 3</div>
            </div>
            {/* order */}
            <h1 class="text-3xl font-bold mb-4">Tailwind CSS Flex Order Examples</h1>
            <div className="bg-gray-200 p-4 my-8 flex">
              <div className="text-white p-4 m-2 bg-red-500   order-2" >item 1</div>
              <div className="text-white p-4 m-2 bg-green-500 " >item 2</div>
              <div className="text-white p-4 m-2 bg-blue-500  " >item 3</div>
            </div>
        </div>
        </>
    );
}

export default FlexBox;