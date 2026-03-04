import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const NaturalMakeupSection = () => {

    return (
        <div>
            <div className='relative  h-[780]'>
                <Image
                    src={'/NaturalBanner1.png'}
                    alt='Natural Makeup Banner Image'
                    fill
                    className='object-cover object-center lg:object-[75%_center]'
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#A9A884]/40  to-transparent"></div>
                {/* card item */}
                <div className='absolute left-20 bottom-14 bg-white p-5 rounded-2xl md:max-w-sm h-auto '>
                    <div className='flex justify-between items-center'>
                        <div>
                            <h2 className='text-[#222222] mt-2 mb-2  text-[1.5rem]'>Cucumber Extract</h2>
                            <span className='font-bold text-black  text-[1.5rem]'>$24.00</span> <span className='text-[#737373] line-through'>$32.00</span>
                        </div>
                        <span className='mr-4 w-14 h-14 flex items-center justify-center text-[#607315] p-2 rounded-full border border-gray-200'><ArrowUpRight width={30} height={30} /></span>
                    </div>
                    <Image
                        src='/Frame1.png'
                        alt='Product 1'
                        width={332} height={332}
                        className='mt-2 mx-auto'
                    />
                </div>
                {/* text content */}
                <div className='absolute right-10 bottom-10'>
                    <h2 className='text-[#FFFFFF] font-medium text-[3.5rem]'>Natural Makeup <br /> For Radiant Skin</h2>

                </div>

            </div>

        </div>
    );
};

export default NaturalMakeupSection;