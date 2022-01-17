import React from 'react'

const SecondContent = () => {
    return (
        <div className="relative bg-white py-2 sm:py-24" id="company">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
          <div className="relative sm:py-16 lg:py-0">
           
            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-0">
              {/* Testimonial card*/}
             <div className="pt-1 sm:pt-16 lg:pt-20">
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
  
          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
            {/* Content area */}


             <div className="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
                <img
                  className="absolute inset-0 h-full w-full object-cover"
                  src='https://images.unsplash.com/photo-1640729792585-8582081ff55b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
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
        </div>
    )
}

export default SecondContent;
