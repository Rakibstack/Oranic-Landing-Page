import Image from 'next/image';
import React from 'react';

const BeforeAfterSection = () => {

    return (
        <div className='relative w-full h-[480px] md:h-[520px] lg:h-[644px] '>
            {/* add before after image */}
            <Image
            src={'/Before After.png'}
            alt='Before and After'
            fill
            ></Image>

            
        </div>
    );
};

export default BeforeAfterSection;