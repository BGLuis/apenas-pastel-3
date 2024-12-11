import Image from 'next/image'
import React from 'react'

interface ProductImgProps {
    alt: string,
    image: string
}

export default function ProductImg({ alt,image }: ProductImgProps) {
    return (
        <div className='flex-none mb-5 md:m-0 md:mr-6 md:aspect-square'>
            <Image src={'/product/' + image} width={140} height={140} alt={alt} className='rounded-md border-2 border-black h-full aspect-square object-cover flex-none' />
        </div>
    )
}
