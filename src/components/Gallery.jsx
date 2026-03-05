
import Image from 'next/image';
import React from 'react';

const Gallery = () => {

    return (
        <div className='bg-[#FAFFE5] py-10'>
            <div className='mx-w-11/12 mx-auto container px-4 grid gap-5 pl-12 md:pl-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                <Image
                src={'/Gallery.png'}
                alt='Gallery Image1'
                width={350}
                height={300}
                
                ></Image>
                <Image
                src={'/Gallery (1).png'}
                alt='Gallery Image2'
                width={350}
                height={300}

                ></Image>
                <Image
                src={'/Gallery (2).png'}
                alt='Gallery Image3'
                width={350}
                height={300}

                ></Image>
                <Image
                src={'/Gallery4.png'}
                alt='Gallery Image4'
                width={350}
                height={60}
                className='rounded-4xl'

                ></Image>


            </div>
            
        </div>
    );
};

export default Gallery;
