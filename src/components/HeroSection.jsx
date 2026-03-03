import { ArrowUpRight, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const HeroSection = () => {

    return (

        <div >
            {/* Hero image */}
            <div className="relative w-full h-[500px] md:h-[680px] lg:h-[780px]">
                <Image
                    src="/Hero.png"
                    alt="Banner Image"
                    fill
                    className="object-cover "
                />
                <div className='absolute lg:flex p-8 gap-8  mx-auto container mx-w-[1200px] mt-20 md:mt-0 lg:left-6 lg:bottom-6 '>
                    <div className='flex-1 '>
                        <h2 className='text-[#FFFFFF] font-bold text-[2rem] md:text-[3rem] lg:text-[5rem]'>Natural Makeup <br /> For Radiant Skin</h2>
                        <p className='text-[#FFFFFF] text-[1.5rem] mb-4'>Ponds face wash for women removes all traces of pollution, dirt, and <br /> impurities to give you a fresh and clean complexion.</p>
                        <button className='flex items-center gap-1 font-medium text-[1.5rem] px-6 py-3 bg-[#607315] rounded-4xl text-white cursor-pointer'>Shop Now <ChevronRight /></button>

                    </div>
                    <div className='flex-1 hidden xl:block bg-white p-5 rounded-2xl md:max-w-sm h-auto '>
                        {/* card */}
                        <div className='flex justify-between items-center'>       
                            <div>
                            <h2 className='text-[#222222] mt-2 mb-2  text-[1.5rem]'>Cucumber Extract</h2>
                            <span className='font-bold text-black  text-[1.5rem]'>$24.00</span> <span className='text-[#737373] line-through'>$32.00</span>
                            </div>
                            <span className='mr-4 w-14 h-14 flex items-center justify-center text-black p-2 rounded-full border border-gray-200'><ArrowUpRight width={30} height={30}  /></span>
                        </div>
                         <Image
                        src='/product1.png'
                        alt='Product 1'
                        width={332} height={332}
                        className='mt-2 mx-auto'
                        />
                       
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HeroSection;