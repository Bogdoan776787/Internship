
import { Fragment } from 'react'
import { Tab } from '@headlessui/react'

const tabs = [
  {
    name: 'Design',
    features: [
      {
        name: 'Lorem ipsum dolor',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet ex ultrices, viverra tortor in, auctor augue.Nunc imperdiet ex ultrices, viverra tortor in, auctor augue.',
        imageSrc: 'https://images.unsplash.com/photo-1602096711412-af3596c8e395?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQyfHxyb2JvdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
        imageAlt: '',
      },
    ],
  },
  {
    name: 'Material',
    features: [
      {
        name: 'Lorem ipsum dolor',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet ex ultrices, viverra tortor in, auctor augue.Nunc imperdiet ex ultrices, viverra tortor in, auctor augue.',
        imageSrc: 'https://images.unsplash.com/photo-1525338078858-d762b5e32f2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM4fHxyb2JvdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
        imageAlt:
          '',
      },
    ],
  },
  {
    name: 'Considerations',
    features: [
      {
        name: 'Lorem ipsum dolor',
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet ex ultrices, viverra tortor in, auctor augue.Nunc imperdiet ex ultrices, viverra tortor in, auctor augue.",
        imageSrc: 'https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQ1fHxyb2JvdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
        imageAlt: '',
      },
    ],
  },
  {
    name: 'Included',
    features: [
      {
        name: "Lorem ipsum dolor",
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet ex ultrices, viverra tortor in, auctor augue.Nunc imperdiet ex ultrices, viverra tortor in, auctor augue.',
        imageSrc: 'https://images.unsplash.com/photo-1596780174143-2fb3300c6dc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM3fHxyb2JvdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
        imageAlt: '',
      },
    ],
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function TechnicalFeature() {
  return (
    <div className="bg-white">
      <section aria-labelledby="features-heading" className="max-w-7xl mx-auto py-32 sm:px-2 lg:px-8">
        <div className="max-w-2xl mx-auto px-4 lg:px-0 lg:max-w-none">
          <div className="max-w-3xl">
            <h2 id="features-heading" className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Technical Specifications
            </h2>
            <p className="mt-4 text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nunc imperdiet ex ultrices, viverra tortor in, auctor augue.
             Etiam urna est, molestie vel magna eget, molestie lobortis neque. 
             Nullam at rutrum eros, sit amet dignissim magna.
            </p>
          </div>

          <Tab.Group as="div" className="mt-4">
            <div className="-mx-4 flex overflow-x-auto sm:mx-0">
              <div className="flex-auto px-4 border-b border-gray-200 sm:px-0">
                <Tab.List className="-mb-px flex space-x-10">
                  {tabs.map((tab) => (
                    <Tab
                      key={tab.name}
                      className={({ selected }) =>
                        classNames(
                          selected
                            ? 'border-indigo-500 text-indigo-600'
                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                          'whitespace-nowrap py-6 border-b-2 font-medium text-sm'
                        )
                      }
                    >
                      {tab.name}
                    </Tab>
                  ))}
                </Tab.List>
              </div>
            </div>

            <Tab.Panels as={Fragment}>
              {tabs.map((tab) => (
                <Tab.Panel key={tab.name} className="space-y-16 pt-10 lg:pt-16">
                  {tab.features.map((feature) => (
                    <div key={feature.name} className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8">
                      <div className="mt-6 lg:mt-0 lg:col-span-5">
                        <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                        <p className="mt-2 text-sm text-gray-500">{feature.description}</p>
                      </div>
                      <div className="lg:col-span-7">
                        <div className="aspect-w-2 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden sm:aspect-w-5 sm:aspect-h-2">
                          <img src={feature.imageSrc} alt={feature.imageAlt} className="object-center object-cover" />
                        </div>
                      </div>
                    </div>
                  ))}
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>
    </div>
  )
}
