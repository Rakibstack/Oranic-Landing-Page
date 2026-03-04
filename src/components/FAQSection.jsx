
'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What makes your skincare different from others?",
      answer: "Our approach combines expert care, safe technology, and personalized treatments to deliver lasting, natural results."
    },
    {
      question: "What makes your skincare different from others?",
      answer: "Our approach combines expert care, safe technology, and personalized treatments to deliver lasting, natural results."
    },
    {
      question: "What makes your skincare different from others?",
      answer: "Our approach combines expert care, safe technology, and personalized treatments to deliver lasting, natural results."
    },
    {
      question: "What makes your skincare different from others?",
      answer: "Our approach combines expert care, safe technology, and personalized treatments to deliver lasting, natural results."
    },
    {
      question: "What makes your skincare different from others?",
      answer: "Our approach combines expert care, safe technology, and personalized treatments to deliver lasting, natural results."
    }
  ];

  return (
    <section className='bg-[#FFFFFF]' >
      
     <div className="max-w-11/12 mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16  items-start">
         {/* Left Side: Content */}
      <div className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-5xl font-serif text-[#1A1A1A] leading-tight">
            We’ve got the answers you need
          </h2>
          <p className="text-gray-500 max-w-md leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
            luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`rounded-2xl transition-all duration-300 overflow-hidden cursor-pointer ${
                openIndex === index ? 'bg-[#F9FBE7]' : 'bg-transparent border-b border-gray-100'
              }`}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            >
              <div className="flex items-center justify-between p-5">
                <h3 className={`text-lg font-medium transition-colors ${
                  openIndex === index ? 'text-[#1A1A1A]' : 'text-gray-700'
                }`}>
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp size={20} className="text-gray-600" />
                ) : (
                  <ChevronDown size={20} className="text-gray-400" />
                )}
              </div>
              
              {/* Accordion Answer with Animation */}
              <div className={`transition-all duration-300 ease-in-out px-5 overflow-hidden ${
                openIndex === index ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side: Image Section */}
      <div className="relative h-[650px] w-full rounded-[60px] overflow-hidden shadow-sm">
        <Image
          src="/Frame 12.png"
          alt="Skincare product in nature"
          fill
          className="object-cover"
          priority
        />
      </div>
     </div>
    </section>
  );
};

export default FAQSection;