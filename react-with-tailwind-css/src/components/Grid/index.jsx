import React from 'react';

function Grid(props) {
    return (
        <>
         
        {/* <div clasName="h-screen">
        <h2 class=" text-xl font-semibold mb-2">Grid Template Columns</h2>
          <div className='container grid grid-cols-4 gap-5 mx-auto p-6 bg-gray-200'>
            <div class="bg-blue-500 text-white p-4 ml-4">Item 1</div>
            <div class="bg-green-500 text-white p-4 ml-4">Item 2</div>
            <div class="bg-red-500 text-white p-4 ml-4">Item 3</div>     
            <div class="bg-blue-500 text-white p-4 ml-4">Item 4</div>
            <div class="bg-green-500 text-white p-4 ml-4">Item 5</div>
            <div class="bg-red-500 text-white p-4 ml-4">Item 6</div>
            <div class="bg-blue-500 text-white p-4 ml-4">Item 7</div>
            <div class="bg-green-500 text-white p-4 ml-4">Item 8</div> 
          </div>
          <h2 class=" text-xl font-semibold mb-2">Grid Column Start / End</h2>
          <div className='container grid grid-cols-5 gap-5 mx-auto p-6 bg-gray-200'>
            <div class="bg-blue-500 text-white p-4 ml-4">Item 1</div>
            <div class="bg-green-500 text-white p-4 ml-4 col-span-2">Item 2</div>
            <div class="bg-red-500 text-white p-4 ml-4">Item 3</div>     
            <div class="bg-blue-500 text-white p-4 ml-4">Item 4</div>
            <div class="bg-green-500 text-white p-4 ml-4">Item 5</div>
            <div class="bg-red-500 text-white p-4 ml-4">Item 6</div>
            <div class="bg-blue-500 text-white p-4 ml-4">Item 7</div>
            <div class="bg-green-500 text-white p-4 ml-4">Item 8</div> 
          </div>
        </div>

        <div clasName="h-screen">
        <h2 className=" text-xl font-semibold mb-2">Grid Template Rows</h2>
         <div className='container grid grid-rows-3 gap-4 mx-auto bg-gray-200 p-4 h-[400px] '>
            <div className="bg-green-500 row-span-1">item 1</div>
            <div className="bg-blue-500 row-span-2">item 2</div>
            <div className="bg-red-500 row-span-1"> item 3</div>
         </div>

        </div> */}
        {/* <h2 className=" text-xl font-semibold mb-2">Grid Row Start / End</h2>
          <div className="container bg-gray-200 mx-auto h-screen grid grid-rows-4 gap-4 grid-flow-col">
              <div className="bg-blue-500  text-white row-span-3" >Row 1</div>
              <div className="bg-green-500 text-white col-span-3" >Row 2</div>
              <div className="bg-red-500   text-white row-span-2 col-span-2 " >Row 3</div>
          </div> */}

        {/* <h2 className=" text-xl font-semibold mb-2">Grid Auto Rows</h2>
          <div className="container bg-gray-200 mx-auto h-screen grid grid-flow-row auto-rows-max md:auto-rows-min">
              <div className="bg-blue-500  text-white" >Row 1</div>
              <div className="bg-green-500 text-white" >Row 2</div>
              <div className="bg-red-500   text-white" >Row 3</div>
          </div> */}

        {/* <h2 className=" text-xl font-semibold mb-2">Justify Cotent</h2>
          <div className="container bg-gray-200 mx-auto p-6 flex gap-2 justify-evenly">
              <div className="bg-blue-500  text-white p-4" >Item 1</div>
              <div className="bg-green-500 text-white p-4" >Item 2</div>
              <div className="bg-red-500   text-white p-4" >Item 3</div>
          </div> */}

        {/* <h2 className=" text-4xl font-semibold mb-2 p-4 ">Justify Items</h2>
          <div className="container bg-gray-200 mx-auto p-6 grid grid-cols-3 gap-5 justify-items-stretch">
              <div className="bg-blue-500  text-white p-4" >Item 1</div>
              <div className="bg-green-500 text-white p-4" >Item 2</div>
              <div className="bg-red-500   text-white p-4" >Item 3</div>
              <div className="bg-blue-500  text-white p-4" >Item 4</div>
              <div className="bg-green-500 text-white p-4" >Item 5</div>
              <div className="bg-red-500   text-white p-4" >Item 6</div>
          </div> */}

        {/* <h2 className=" text-4xl font-semibold mb-2 p-4 ">Justify self</h2>
          <div className="container bg-gray-200 mx-auto p-6 grid grid-cols-3 gap-5 justify-items-stretch">
              <div className="bg-blue-500  text-white p-4" >Item 1</div>
              <div className="bg-green-500 text-white p-4 justify-self-center" >Item 2</div>
              <div className="bg-red-500   text-white p-4" >Item 3</div>
              <div className="bg-blue-500  text-white p-4" >Item 4</div>
              <div className="bg-green-500 text-white p-4" >Item 5</div>
              <div className="bg-red-500   text-white p-4" >Item 6</div>
          </div> */}
         
         {/* <div className="flex flex-wrap content-evenly h-screen w-full bg-gray-200">
           <div className="h-32 w-32 p-4 text-white bg-green-500">item 1</div>
           <div className="h-32 w-32 p-4 text-white bg-red-500">item 2</div>
           <div className="h-32 w-32 p-4 text-white bg-blue-500">item 3</div>
           <div className="h-32 w-32 p-4 text-white bg-orange-500">item 4</div>
           <div className="h-32 w-32 p-4 text-white bg-purple-500">item 5</div>
           <div className="h-32 w-32 p-4 text-white bg-yellow-500">item 6</div>
         </div> */}
         
         {/* <div className="flex h-32 w-full bg-gray-200 items-end" >
            <div className="w-16 text-white h-16 bg-purple-500" >item 1</div>
            <div className="w-16 text-white h-16 bg-blue-500" >item 2</div>
            <div className="w-16 text-white h-16 bg-green-500" >item 3</div>
         </div> */}
         {/* <div className="flex h-32 w-full bg-gray-200 " >
            <div className="w-16 text-white h-16 bg-purple-500" >item 1</div>
            <div className="w-16 text-white h-16 bg-blue-500 self-end" >item 2</div>
            <div className="w-16 text-white h-16 bg-green-500 " >item 3</div>
         </div> */}

        {/* <div className="h-48 w-full flex flex-wrap place-content-evenly" >
          <div className="h-16 w-32 p-4 text-white bg-red-500" >item 1</div>
          <div className="h-16 w-32 p-4 text-white bg-pink-500" >item 2</div>
          <div className="h-16 w-32 p-4 text-white bg-purple-500" >item 3</div>
          <div className="h-16 w-32 p-4 text-white bg-green-500" >item 4</div>
        </div> */}

       <div className="grid h-64 w-full bg-gray-200 place-content-center" >
         <div className="w-32 h-32 bg-blue-500 text-white text-center " >center box</div>
       </div>

        </>  
    );
}


export default Grid;
