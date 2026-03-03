import Image from 'next/image';
import React from 'react';

const InspiredSection = () => {

    return (
        <div>
            <div className='flex flex-col lg:flex-row gap-5  bg-[#FFFFFF]'>
                {/* content information */}
                <div className='flex-1 py-12 ml-12'>
                    <h2 className='text-[#222222] font-medium text-2xl md:text-3xl lg:text-[3.5rem] mr-2'>Rooted in science. <br />Inspired by nature.</h2>
                    <div className='grid gap-4 grid-cols-1 lg:grid-cols-2 mt-12'>
                        <div className='bg-[#FFFFFF] p-4 '>
                            <span className='inline-flex items-center justify-center p-3 bg-[#FAFFE5] rounded-md'><Image
                            src={'/tree.png'}
                            alt='Tree'
                            width={28}
                            height={38}
                            
                            /></span>
                            <h2 className='font-medium text-[#222222] text-[1.8rem] mt-6'>Clean Ingredients</h2>
                            <p className='text-[#737373] text-[1.2rem] mt-2'>No parabens, sulfates, or harsh chemicals</p>
                        </div>
                        <div className='bg-[#FFFFFF] p-4 '>
                            <span className='inline-flex items-center justify-center p-3 bg-[#FAFFE5] rounded-md'><Image
                            src={'/science.png'}
                            alt='Tree'
                            width={28}
                            height={38}
                            
                            /></span>
                            <h2 className='font-medium text-[#222222] text-[1.8rem] mt-6'>Sustainable</h2>
                            <p className='text-[#737373] text-[1.2rem] mt-2'>Eco-conscious packaging & sourcing</p>
                        </div>
                        <div className='bg-[#FFFFFF] p-4 '>
                            <span className='inline-flex items-center justify-center p-3 bg-[#FAFFE5] rounded-md'><Image
                            src={'/cruelty.png'}
                            alt='Tree'
                            width={28}
                            height={38}
                            
                            /></span>
                            <h2 className='font-medium text-[#222222] text-[1.8rem] mt-6'>Cruelty-Free</h2>
                            <p className='text-[#737373] text-[1.2rem] mt-2'>Never tested on animals</p>
                        </div>
                        <div className='bg-[#FFFFFF] p-4 '>
                            <span className='inline-flex items-center justify-center p-3 bg-[#FAFFE5] rounded-md'><Image
                            src={'/tree.png'}
                            alt='Tree'
                            width={28}
                            height={38}
                            
                            /></span>
                            <h2 className='font-medium text-[#222222] text-[1.8rem] mt-6'>Clean Ingredients</h2>
                            <p className='text-[#737373] text-[1.2rem] mt-2'>No parabens, sulfates, or harsh chemicals</p>
                        </div>
                        
                    </div>

                </div>
                {/* content Image */}
                <div className=' flex-1'>
                    <Image
                    src={'/image 78 (1).png'}
                    alt='Inspired Image'
                    width={820}
                    height={400}
                    
                    />

                </div>

            </div>
            
        </div>
    );
};

export default InspiredSection;