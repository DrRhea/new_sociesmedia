import React from 'react';
import { Disclosure } from '@headlessui/react';
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: "Apa itu Sociesmedia?",
    answer: "Sociesmedia adalah platform yang menyediakan berbagai informasi dan materi terbaru untuk membantu pengguna dalam berbagai topik.",
  },
  {
    question: "Bagaimana cara mengunduh materi?",
    answer: "Anda dapat mengunduh materi dengan menekan tombol 'Unduh' yang tersedia pada setiap materi di halaman utama kami.",
  },
  {
    question: "Apakah Sociesmedia gratis?",
    answer: "Ya, Sociesmedia menyediakan beberapa materi dan informasi secara gratis. Namun, ada juga konten premium yang memerlukan langganan.",
  }
];

const BerandaFaq = () => {
  return (
    <div className="bg-white">
      <div className="max-w-screen-xl p-6 mx-auto">
        <div className="max-w-4xl mx-auto divide-y divide-gray-900/10">
          <h1 className="my-2 mb-6 text-3xl font-semibold text-center">FAQ</h1>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex items-start justify-between w-full text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">{faq.question}</span>
                        <span className="flex items-center ml-6 h-7">
                          {open ? (
                            <MinusSmallIcon className="w-6 h-6" aria-hidden="true" />
                          ) : (
                            <PlusSmallIcon className="w-6 h-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="pr-12 mt-2">
                      <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

export default BerandaFaq;
