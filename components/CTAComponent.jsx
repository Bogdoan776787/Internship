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
            <div className="inline-flex rounded-md shadow">
              <a
                href="/Contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
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