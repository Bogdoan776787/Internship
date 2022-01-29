

import Carousel from 'react-bootstrap/Carousel';


export default function HeroSection() {
  return (
    <div className="relative bg-transparent overflow-hidden">
      
      <div className="relative pt-6 pb-16 sm:pb-24">
        

        <main className="mt-16 sm:mt-24">
          <div className="mx-auto max-w-7xl">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              
              <div className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
                <div>
                 
                  <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-gray-800 sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl">
                    <span className="md:block">Some beautiful words</span>{' '}
                    <span className="text-indigo-400 md:block">Yuman</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-800 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
                    amet fugiat veniam occaecat fugiat aliqua ad ad non deserunt sunt.
                  </p>

                  <form action="#" className="mt-12 sm:max-w-lg sm:w-full sm:flex">
                <div className="min-w-0 flex-1 mt-4">
                  <label htmlFor="hero-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="hero-email"
                    type="email"
                    className="block w-full border border-gray-300 rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:mb-4"
                    placeholder="Enter your email"
                  />
                </div>
                <div className=" mt-4  sm:mt-4 sm:ml-3 ">
                  <button
                    type="submit"
                    className="block w-full rounded-md border border-transparent px-5 py-3 bg-indigo-600 text-base font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:px-10 "
                  >
                    Notify me
                  </button>
                  </div>
              </form>
                  <p className="mt-8 text-sm text-white uppercase tracking-wide font-semibold sm:mt-10">Used by</p>
                  
                  {/* //LOGO PLACE */}
                  <div className="mt-5 w-full sm:mx-auto sm:max-w-lg lg:ml-0">
                    
                    
                    <div className="flex flex-wrap items-start justify-between">
                      

                      <div className="flex justify-center px-1">
                        <img
                          className="h-9 sm:h-10"
                          src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
                          alt="Tuple"
                        />
                      </div>
                      <div className="flex justify-center px-1">
                        <img
                          className="h-9 sm:h-10"
                          src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                          alt="Workcation"
                        />
                      </div>
                      <div className="flex justify-center px-1">
                        <img
                          className="h-9 sm:h-10"
                          src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                          alt="StaticKit"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
                <div className="bg-transparent  sm:max-w-lg sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden mt-24 ">
                 
                <Carousel >
  <Carousel.Item>
    <img
      className="d-block img-responsive  "
      src={require('../images/features-bg.png').default}
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block img-responsive"
      src={require('../images/features-bg.png').default}
      alt="Second slide"
    />

   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block img-responsive"
      src={require('../images/features-bg.png').default}
      alt="Third slide"
    />

  
  </Carousel.Item>
</Carousel>


              </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
