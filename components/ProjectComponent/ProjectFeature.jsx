import React from "react"


const features = [
    {
      name: 'Minimal and thoughtful',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet ex ultrices, viverra tortor in, auctor augue. Etiam urna est, molestie vel magna eget, molestie lobortis neque. Nullam at rutrum eros, sit amet dignissim magna. Duis mattis maximus metus, quis ultricies augue ultricies sed. Duis orci elit, euismod sit amet placerat sit amet, bibendum sit amet lectus.Vestibulum condimentum, odio a sollicitudin feugiat, lorem metus vestibulum enim, in euismod enim massa quis enim. In consequat ante sed augue malesuada tempor. Vivamus accumsan sodales commodo. ',
      imageSrc: 'https://images.unsplash.com/photo-1532186773960-85649e5cb70b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTEzfHxyb2JvdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
      imageAlt: 'White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.',
    },
    {
      name: 'Refined details',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet ex ultrices, viverra tortor in, auctor augue. Etiam urna est, molestie vel magna eget, molestie lobortis neque. ',
      imageSrc: 'https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTkwfHxyb2JvdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
      imageAlt: 'Detail of zipper pull with tan leather and silver rivet.',
    },
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function ProjectFeature() {
    return (
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Lorem Ipsum</h2>
            <p className="mt-4 text-gray-500">
            Duis orci elit, euismod sit amet placerat sit amet, bibendum sit amet lectus.Vestibulum condimentum, 
            odio a sollicitudin feugiat, lorem metus vestibulum enim, in euismod enim massa quis enim. In consequat ante sed augue malesuada tempor. Vivamus accumsan sodales commodo
            </p>
          </div>
  
          <div className="mt-16 space-y-16">
            {features.map((feature, featureIdx) => (
              <div
                key={feature.name}
                className="flex flex-col-reverse  lg:grid lg:grid-cols-12 lg:gap-x-8 lg:items-center"
              >
                <div
                  className={classNames(
                    featureIdx % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-8 xl:col-start-9',
                    'mt-6 lg:mt-0 lg:row-start-1 lg:col-span-5 xl:col-span-4'
                  )}
                >
                  <h3 className="text-lg font-medium text-indigo-900">{feature.name}</h3>
                  <p className="mt-2 text-sm text-gray-500">{feature.description}</p>
                </div>
                <div
                  className={classNames(
                    featureIdx % 2 === 0 ? 'lg:col-start-6 xl:col-start-5' : 'lg:col-start-1',
                    'flex-auto lg:row-start-1 lg:col-span-7 xl:col-span-8'
                  )}
                >
                  <div className="aspect-w-5 aspect-h-2 rounded-lg bg-gray-100 overflow-hidden">
                    <img src={feature.imageSrc} alt={feature.imageAlt} className="object-center object-cover" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  