import Image from 'next/image';
import React from 'react';

const BeforeAfterSection = () => {

    return (
        <div className='relative w-full h-[644px] '>
            <Image
            src={'/Before After.png'}
            alt='Before and After'
            fill
            ></Image>

            
        </div>
    );
};

export default BeforeAfterSection;