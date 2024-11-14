import React from 'react';
import { Accordion, AccordionItem } from "@nextui-org/react";

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
    question: "Bagaimana cara mengunduh materi di Sociesmedia?",
    answer: "Untuk mengunduh materi, cukup pilih materi yang Anda inginkan, dan tekan tombol 'Unduh' yang tersedia di setiap halaman materi. Pastikan Anda sudah terdaftar dan login untuk menikmati fitur ini.",
  },
  {
    question: "Apakah Sociesmedia hanya untuk siswa?",
    answer: "Tidak! Meskipun Sociesmedia berfokus pada materi pembelajaran untuk siswa, guru dan pengajar juga dapat memanfaatkan platform ini untuk menemukan referensi dan materi ajar yang berkualitas.",
  }
];

const BerandaAccordion = () => {
  return (
    <div className="max-w-screen-lg p-6 mx-auto">
        <h1 className="my-2 mb-6 text-3xl font-semibold text-center">FAQ</h1>
        <Accordion>
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              aria-label={`Accordion ${index + 1}`} 
              title={faq.question}
            >
              {faq.answer}
            </AccordionItem>
          ))}
        </Accordion>
    </div>
  );
};

export default BerandaAccordion;
