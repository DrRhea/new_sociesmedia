import React from 'react';
import { Disclosure } from '@headlessui/react';
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: "Apa itu Sociesmedia?",
    answer: "Sociesmedia adalah platform pembelajaran yang menyediakan berbagai media pembelajaran interaktif, termasuk video, podcast, dan materi tertulis, untuk membantu siswa memahami pelajaran dengan cara yang menyenangkan dan efektif.",
  },
  {
    question: "Bagaimana cara mengakses materi di Sociesmedia?",
    answer: "Cukup pilih kelas yang Anda inginkan (Kelas VII, VIII, IX) dan akses materi sesuai dengan topik yang Anda butuhkan. Semua materi disajikan dengan mudah dipahami dan dapat diunduh untuk penggunaan offline.",
  },
  {
    question: "Apakah saya harus membayar untuk mengakses materi di Sociesmedia?",
    answer: "Sebagian besar materi di Sociesmedia dapat diakses secara gratis. Namun, kami juga menyediakan materi premium yang lebih mendalam dan khusus untuk pengembangan lebih lanjut yang memerlukan langganan.",
  },
  {
    question: "Bagaimana cara mengunduh materi di Sociesmedia?",
    answer: "Untuk mengunduh materi, cukup pilih materi yang Anda inginkan, dan tekan tombol 'Unduh' yang tersedia di setiap halaman materi. Pastikan Anda sudah terdaftar dan login untuk menikmati fitur ini.",
  },
  {
    question: "Apakah Sociesmedia hanya untuk siswa?",
    answer: "Tidak! Meskipun Sociesmedia berfokus pada materi pembelajaran untuk siswa, guru dan pengajar juga dapat memanfaatkan platform ini untuk menemukan referensi dan materi ajar yang berkualitas.",
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
