import React, { Fragment, useState } from 'react';
import { Card, CardBody, CardFooter, Image, Button, Tabs, Tab } from "@nextui-org/react";
import { Link } from "@inertiajs/react";
import { Dialog, Disclosure, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon, PlusIcon } from '@heroicons/react/20/solid';

const filters = [
  {
    id: 'brand',
    name: 'Brand',
    options: [
      { value: 'clothing-company', label: 'Clothing Company' },
      { value: 'fashion-inc', label: 'Fashion Inc.' },
      { value: 'shoes-n-more', label: "Shoes 'n More" },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const BerandaMateri = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const list = [
    {
      title: "Materi A",
      buttonText: "Unduh",
      img: "https://placehold.co/600x400?text=Sociesmedia",
    },
    {
      title: "Materi B",
      buttonText: "Unduh",
      img: "https://placehold.co/600x400?text=Sociesmedia",
    },
    {
      title: "Materi C",
      buttonText: "Unduh",
      img: "https://placehold.co/600x400?text=Sociesmedia",
    },
    {
      title: "Materi D",
      buttonText: "Unduh",
      img: "https://placehold.co/600x400?text=Sociesmedia",
    },
  ];

  return (
    <div className="bg-white">
      {/* Mobile filter dialog */}
      <Transition.Root show={mobileFiltersOpen} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <Dialog.Panel className="relative flex flex-col w-full h-full max-w-xs py-4 pb-6 ml-auto overflow-y-auto bg-white shadow-xl">
                <div className="flex items-center justify-between px-4">
                  <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                  <button
                    type="button"
                    className="flex items-center justify-center w-10 h-10 p-2 -mr-2 text-gray-400 hover:text-gray-500"
                    onClick={() => setMobileFiltersOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Filters */}
                <form className="mt-4">
                  {filters.map((section) => (
                    <Disclosure as="div" key={section.name} className="pt-4 pb-4 border-t border-gray-200">
                      {({ open }) => (
                        <fieldset>
                          <legend className="w-full px-2">
                            <Disclosure.Button className="flex items-center justify-between w-full p-2 text-gray-400 hover:text-gray-500">
                              <span className="text-sm font-medium text-gray-900">{section.name}</span>
                              <span className="flex items-center ml-6 h-7">
                                <ChevronDownIcon
                                  className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-5 w-5 transform')}
                                  aria-hidden="true"
                                />
                              </span>
                            </Disclosure.Button>
                          </legend>
                          <Disclosure.Panel className="px-4 pt-4 pb-2">
                            <div className="space-y-6">
                              {section.options.map((option, optionIdx) => (
                                <div key={option.value} className="flex items-center">
                                  <input
                                    id={`${section.id}-${optionIdx}-mobile`}
                                    name={`${section.id}[]`}
                                    defaultValue={option.value}
                                    type="checkbox"
                                    className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                  />
                                  <label
                                    htmlFor={`${section.id}-${optionIdx}-mobile`}
                                    className="ml-3 text-sm text-gray-500"
                                  >
                                    {option.label}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </Disclosure.Panel>
                        </fieldset>
                      )}
                    </Disclosure>
                  ))}
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <main className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 sm:py-24 lg:px-8">
        {/* Header Section */}
        <div className="pb-10 border-b border-gray-200">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">Materi Pembelajaran</h1>
          <p className="mt-4 text-base text-gray-500">
            Pilih kelas dan filter berdasarkan brand untuk menemukan materi yang Anda butuhkan.
          </p>
        </div>

        {/* Filters and Cards Section */}
        <div className="mt-8 lg:grid lg:grid-cols-4 lg:gap-x-8">
          {/* Filters */}
          <aside className="hidden lg:block">
            <form className="space-y-10 divide-y divide-gray-200">
              {filters.map((section, sectionIdx) => (
                <div key={section.name} className={sectionIdx === 0 ? null : 'pt-10'}>
                  <fieldset>
                    <legend className="block text-sm font-medium text-gray-900">{section.name}</legend>
                    <div className="pt-6 space-y-3">
                      {section.options.map((option, optionIdx) => (
                        <div key={option.value} className="flex items-center">
                          <input
                            id={`${section.id}-${optionIdx}`}
                            name={`${section.id}[]`}
                            defaultValue={option.value}
                            type="checkbox"
                            className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                          />
                          <label htmlFor={`${section.id}-${optionIdx}`} className="ml-3 text-sm text-gray-600">
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </fieldset>
                </div>
              ))}
            </form>
          </aside>

          {/* Mobile filter button */}
          <div className="lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 text-gray-400 bg-white border border-gray-300 rounded-md hover:bg-gray-50 hover:text-gray-500"
              onClick={() => setMobileFiltersOpen(true)}
            >
              <span className="sr-only">Filters</span>
              <PlusIcon className="w-5 h-5" aria-hidden="true" />
              <span className="ml-2 text-sm font-medium text-gray-700">Filters</span>
            </button>
          </div>

          {/* Main Content */}
          <div className="mt-6 lg:col-span-3 lg:mt-0">
            {/* Tabs for Class Selection */}
            <div className="flex items-center justify-between mb-6">
              <Tabs aria-label="Kelas" className="w-full">
                <Tab key="kelas-vii" title="Kelas VII">
                  <p className="text-lg">Kelas VII</p>
                </Tab>
                <Tab key="kelas-viii" title="Kelas VIII">
                  <p className="text-lg">Kelas VIII</p>
                </Tab>
                <Tab key="kelas-ix" title="Kelas IX">
                  <p className="text-lg">Kelas IX</p>
                </Tab>
              </Tabs>
            </div>

            {/* Cards section */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {list.map((item, index) => (
                <Link href={`/${item.title.toLowerCase()}`} key={index} className="w-full">
                  <Card shadow="md" className="w-full overflow-hidden rounded-3xl">
                    <CardBody className="p-0">
                      <Image
                        isZoomed
                        shadow="sm"
                        radius="none"
                        width="100%"
                        alt={item.title}
                        className="w-full object-cover h-[200px]"
                        src={item.img}
                      />
                    </CardBody>
                    <CardFooter className="flex flex-col items-start p-4 text-lg text-gray-800">
                      <p className="mb-2 font-semibold text-left">{item.title}</p>
                      <Button
                        auto
                        className="flex items-center justify-center w-full font-semibold bg-gray-300 rounded-full"
                      >
                        <i className="mr-2 text-2xl text-gray-100 bx bxs-download"></i>
                        <span className="text-gray-600">{item.buttonText}</span>
                      </Button>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default BerandaMateri;
