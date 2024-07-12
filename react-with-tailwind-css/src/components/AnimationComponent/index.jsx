import React from 'react';

function AnimationComponent(props) {
    return (
        <>
         {/* <div className='h-screen w-screen grid place-content-center'>
             <div className="h-[300px] w-[300px] bg-green-600 hover:transform hover:scale-[1.1] hover:transition-all hover:delay-1000">

            </div>
        </div>         */}
        {/* <div className='h-screen w-screen grid place-content-center'>
            <div className="h-[300px] w-[300px] bg-green-600 hover:transform hover:translate-x-[100px] hover:-translate-y-40 hover:transition-all hover:ease-out hover:duration-1000 ">

            </div>
        </div>         */}
        {/* <div className='h-screen w-screen grid place-content-center'>
            <div className="h-[300px] w-[300px] bg-green-600 hover:transform hover:rotate-180 hover:transition-all hover:ease-out hover:duration-1000 ">

            </div>
        </div>              */}
        <div className='h-screen w-screen grid place-content-center'>
            <div className="h-[300px] w-[300px] bg-green-600 hover:transform hover:skew-y-12 hover:transition-all hover:ease-out hover:duration-1000 ">

            </div>
        </div>     

        </>
    );
}

export default AnimationComponent;