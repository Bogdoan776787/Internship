import React from 'react'

const CardComponent = () => {
    return (
        <div className="relative bg-white py-16 sm:py-24" id="company">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
          <div className="relative sm:py-16 lg:py-0">
            <div aria-hidden="true" className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
              <div className="absolute inset-y-0 right-1/2 w-full bg-gray-50 rounded-r-3xl lg:right-72" />
              <svg
                className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12 "
                width={404}
                height={392}
                fill="none"
                viewBox="0 0 404 392"
              >
                
                <rect width={404} height={392} fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
              </svg>
            </div>
            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
              {/* Testimonial card*/}
              <div className="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
                <img
                  className="absolute inset-0 h-full w-full object-cover"
                  src='https://images.unsplash.com/photo-1640645294304-2cd96f5d73f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
                  alt=""
                />
                <div className="absolute inset-0 " />
                <div className="absolute inset-0 " />
                <div className="relative px-8">
                  <div className="h-12">
                 
                  </div>
                  <blockquote className="mt-8">
                    <div className="relative text-lg font-medium text-white md:flex-grow">
                    
                      <p className="relative">
                        Tincidunt integer commodo, cursus etiam aliquam neque, et. Consectetur pretium in volutpat, diam.
                        Montes, magna cursus nulla feugiat dignissim id lobortis amet.
                      </p>
                    </div>
  
                  
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
  
          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
            {/* Content area */}
            <div className="pt-12 sm:pt-16 lg:pt-20">
              <h2 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">
                On a mission to empower teams
              </h2>
              <div className="mt-6 text-gray-500 space-y-6">
                <p className="text-lg">
                  Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique
                  pellentesque. Blandit amet, sed aenean erat arcu morbi. Cursus faucibus nunc nisl netus morbi vel
                  porttitor vitae ut. Amet vitae fames senectus vitae.
                </p>
                <p className="text-base leading-7">
                  Sollicitudin tristique eros erat odio sed vitae, consequat turpis elementum. Lorem nibh vel, eget
                  pretium arcu vitae. Eros eu viverra donec ut volutpat donec laoreet quam urna. Sollicitudin tristique
                  eros erat odio sed vitae, consequat turpis elementum. Lorem nibh vel, eget pretium arcu vitae. Eros eu
                  viverra donec ut volutpat donec laoreet quam urna.
                </p>
             
              </div>
            </div>
  
         
            </div>
          </div>
        </div>
    )
}

export default CardComponent
