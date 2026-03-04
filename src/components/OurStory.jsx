
import { ArrowLeft, ArrowRight, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const OurStory = () => {

    return (
        <div className='bg-white p-6'>
            <div className='mx-w-11/12 mx-auto container py-10'>
                <div className='flex justify-between items-center mb-10'>
                <h2 className='text-[3.5rem] text-[#222222] font-medium'>Our Stories</h2>
                 <div className="flex gap-4 pt-6">
            <button className="p-4 border border-gray-300 rounded-full hover:bg-white hover:border-gray-400 transition-all text-gray-500 group">
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </button>
            <button className="p-4 border border-gray-300 rounded-full hover:bg-white hover:border-gray-400 transition-all text-gray-500 group">
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
            </div>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                 <div>
                    <Image
                    src={'/story.png'}
                    alt='Story Image'
                    width={440}
                    height={300}
                    />
                    <div className='flex gap-2 items-center mt-2'>
                        <div className='inline-flex w-2 h-2 rounded-full bg-black'></div>
                        <h2 className='text-[#222222] font-semibold mt-1'>Beauty</h2>
                    </div>
                    <h2 className='text-[#222222] text-[2rem]'>Your Daily Skincare Routine,<br /> Simplified</h2>
                    <button className='flex items-center text-[#607315] text-[1.6rem]'>Read More <ChevronRight /></button>
                 </div>
                 <div>
                    <Image
                    src={'/story.png'}
                    alt='Story Image'
                    width={440}
                    height={300}
                    />
                    <div className='flex gap-2 items-center mt-2'>
                        <div className='inline-flex w-2 h-2 rounded-full bg-black'></div>
                        <h2 className='text-[#222222] font-semibold mt-1'>Beauty</h2>
                    </div>
                    <h2 className='text-[#222222] text-[2rem]'>Your Daily Skincare Routine,<br /> Simplified</h2>
                    <button className='flex items-center text-[#607315] text-[1.6rem]'>Read More <ChevronRight /></button>
                 </div>
                 <div>
                    <Image
                    src={'/story.png'}
                    alt='Story Image'
                    width={440}
                    height={300}
                    />
                    <div className='flex gap-2 items-center mt-2'>
                        <div className='inline-flex w-2 h-2 rounded-full bg-black'></div>
                        <h2 className='text-[#222222] font-semibold mt-1'>Beauty</h2>
                    </div>
                    <h2 className='text-[#222222] text-[2rem]'>Your Daily Skincare Routine,<br /> Simplified</h2>
                    <button className='flex items-center text-[#607315] text-[1.6rem]'>Read More <ChevronRight /></button>
                 </div>
                 
            </div>
            </div>
            
        </div>
    );
};

export default OurStory;