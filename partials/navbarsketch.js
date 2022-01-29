import React, { useState, useEffect } from 'react';

import { Disclosure, } from '@headlessui/react'
import {  MenuIcon, XIcon } from '@heroicons/react/outline'
import {Link as LinkRout} from 'react-router-dom';
import { motion } from "framer-motion";



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function   NavBar (){
  
  
  const [top, setTop] = useState(true);
  const { pathname } = useLocation();

  
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 30 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);  



  return (
    <Disclosure as="nav" className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top && 'bg-white opacity-80 shadow-lg '}`} >
      {({ open }) => (
        <>
          <div className="max-w-6xl mx-auto px-5 sm:px-6  ">
            <div className="relative flex justify-between  h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-center ">
                <div className="flex-shrink-0 flex items-center  ">
                  
                   <LinkRout to="" className="block" >
              <svg className="w-8 h-8" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient cx="21.152%" cy="86.063%" fx="21.152%" fy="86.063%" r="79.941%" id="header-logo">
                    <stop stopColor="#7f44dd" offset="0%" />
                    <stop stopColor="#2f1e92" offset="25.871%" />
                    <stop stopColor="#ae33f5" offset="100%" />
                  </radialGradient>
                </defs>
                <rect width="32" height="32" rx="16" fill="url(#header-logo)" fillRule="nonzero" />
              </svg>
            </LinkRout>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8 cursor-pointer ">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  <LinkRout
                    to="/"
                    className= "  hover:border-indigo-500 text-gray-500 hover:text-indigo-700 inline-flex items-center px-1 pt-1 border-b-2 text-base font-medium text-decoration-none"
                  >
                    
                    Home
                  </LinkRout>
                  <LinkRout
                    to="/Company"
                    className="hover:border-indigo-500 text-gray-500  hover:text-indigo-700 inline-flex items-center px-1 pt-1 border-b-2 text-base font-medium text-decoration-none"
                  >
                    Company
                  </LinkRout>
                  <LinkRout
                   to="/Project"
                    className="hover:border-indigo-500 text-gray-500 hover:border-gray-300 hover:text-indigo-700 inline-flex items-center px-1 pt-1 border-b-2 text-base font-medium text-decoration-none"
                  >
                    Project
                  </LinkRout>

                  <LinkRout
                    to="/Blog"
                    className="hover:border-indigo-500 text-gray-500 hover:border-gray-300 hover:text-indigo-700 inline-flex items-center px-1 pt-1 border-b-2 text-base font-medium text-decoration-none"
                  >
                    Blog
                  </LinkRout>
                 
                  <LinkRout
                    to="/Contact"
                    className="hover:border-indigo-500 text-gray-500 hover:border-gray-300 hover:text-indigo-700 inline-flex items-center px-1 pt-1 border-b-2 text-base font-medium text-decoration-none"
                  >
                    Contact
                  </LinkRout>
                  

                  
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
               
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-4 space-y-1">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Disclosure.Button
                as="a"
                href="#"
                className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Home
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Company
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Projects
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Contact
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

