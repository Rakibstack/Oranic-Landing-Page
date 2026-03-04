import { ArrowUpRight, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const OurCareSection = () => {

    return (
        <div className='bg-[#FAFFE5] py-22'>
            <div className='flex gap-6 mx-w-11/12 mx-auto container'>
                {/* our care content */}
                <div className='flex-1 bg-[#607315] rounded-3xl p-8 '>
                   <div className='py-26 space-y-4'>
                     <p className='text-[#FFFFFF] text-[24px] '>Expert skin care</p>
                    <h2 className='text-[#FFFFFF] font-bold text-[3.5rem]'>Redefine timeless <br /> beauty with our care</h2>
                 <button className='flex gap-2 items-center bg-white px-4 py-2 rounded-4xl cursor-pointer hover:bg-[#6B7F1D] hover:text-white hover:border-white border duration-300 transition text-[#607315] text-[1.4rem]'>Shop Now <ChevronRight /></button>
                    <div className='mt-10 flex items-center gap-8'>
                          <div className="flex items-center -space-x-4">
                        <div className="w-14 h-14 rounded-full border-3
                         border-[#FFFFFF] overflow">
                            <Image src="/Ellipse 26.png" alt="avatar1" width={56} height={56} />
                        </div>

                        <div className="w-14 h-14 rounded-full border-3 border-[#FFFFFF] overflow-hidden">
                            <Image src="/Ellipse 27.png" alt="avatar2" width={56} height={56} />
                        </div>

                        <div className="w-14 h-14 rounded-full border-3 border-[#FFFFFF] overflow-hidden">
                            <Image src="/Ellipse 28.png" alt="avatar3" width={56} height={56} />
                        </div>

                        <div className="w-14 h-14 rounded-full border-3 border-[#FFFFFF] overflow-hidden">
                            <Image src="/Ellipse 29.png" alt="avatar4" width={56} height={56} />
                        </div>

                        <div className="w-14 h-14 bg-[#FFFFFF] rounded-full flex items-center justify-center">
                            <ArrowUpRight className="text-[#6B7F1D]" size={22} />
                        </div>

                    </div>
                    <div>
                        <h2 className='font-bold text-[2.3rem] text-white'>12k+</h2>
                        <p className='font-medium text-[20px] text-white'>Customers Rating</p>
                    </div>
                    </div>
                   </div>

                </div>
                {/* our care image */}
                <div className='relative flex-1 w-full h-[500px] lg:h-[640px]'>
                    <Image
                    src={'/ourcareImage.png'}
                    alt='beauty with our care'
                    fill
                    className='rounded-3xl'
                    >

                    </Image>

                </div>

            </div>
            
        </div>
    );
};

export default OurCareSection;