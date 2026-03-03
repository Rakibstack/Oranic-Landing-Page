import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';

const SkinMarqueeSection = () => {

    return (
        <div className='bg-[#607315] p-4 '>
            <Marquee speed={95} pauseOnHover>
                <div className='flex gap-6 mr-5'>
                <h2 className='text-[2.4rem] font-medium'>Skin Care </h2>
               <Image
               src={'/Star 26.png'}
               alt='star icon'
               width={46}
               height={40}
               />
                </div>
                <div className='flex gap-6 mr-5'>
                <h2 className='text-[2.4rem] font-medium'>Skin Care </h2>
               <Image
               src={'/Star 26.png'}
               alt='star icon'
               width={46}
               height={40}
               />
                </div>
                <div className='flex gap-6 mr-5'>
                <h2 className='text-[2.4rem] font-medium'>Skin Care </h2>
               <Image
               src={'/Star 26.png'}
               alt='star icon'
               width={46}
               height={40}
               />
                </div>
                <div className='flex gap-6 mr-5'>
                <h2 className='text-[2.4rem] font-medium'>Skin Care </h2>
               <Image
               src={'/Star 26.png'}
               alt='star icon'
               width={46}
               height={40}
               />
                </div>
                <div className='flex gap-6 mr-5'>
                <h2 className='text-[2.4rem] font-medium'>Skin Care </h2>
               <Image
               src={'/Star 26.png'}
               alt='star icon'
               width={46}
               height={40}
               />
                </div>
                <div className='flex gap-6 mr-5'>
                <h2 className='text-[2.4rem] font-medium'>Skin Care </h2>
               <Image
               src={'/Star 26.png'}
               alt='star icon'
               width={46}
               height={40}
               />
                </div>
            </Marquee>

        </div>
    );
};

export default SkinMarqueeSection;