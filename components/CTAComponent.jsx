import React from 'react'

const CTAComponent = () => {
    return (
        <div className="bg-white mr-8 ml-8 mb-8 rounded-l-lg rounded-r-lg  ">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
            <span className="block">Ready to colaborate?</span>
            <span className="block text-indigo-600">You can write us an email.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="">
              <a
                href="/contact"
                className='animate-bounce transition duration-500 transform hover:-translate-y-1 inline-block bg-indigo-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer'
              >
                Let's do it
              </a>
            </div>
          </div>
        </div>
      </div>
    )
}

export default CTAComponent
