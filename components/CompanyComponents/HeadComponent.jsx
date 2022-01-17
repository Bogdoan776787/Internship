import React from 'react'
import { defaultMaxListeners } from 'stream'

 const HeadComponent = () => {
    return (
        
             <div className="bg-white relative  ">  
           <img
          className=" absolute object-cover h-full w-full opacity-25  "
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          alt=""
        />
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
       
          
          <div className="text-center">
           
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              We are Yuman
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula maximus semper. 
            </p>
          
          </div>
         
        </div>
      
      </div>
      
        
    )
}
export default HeadComponent;