import React from 'react'

interface ProductTextProps{
    name: string,
    Ingr?: string,
    price: number
}

export default function ProductText({name, Ingr, price}:ProductTextProps) {
    return (
        <div className='mr-10 flex flex-col justify-between'>
            <h1 className='font-passeroOne text-3xl'>{name}</h1>
            {
                Ingr &&
                <div>
                <h2 className='font-passeroOne text-xl'>Ingredientes</h2>
                <p>{Ingr}</p>
            </div>
            }
            <h4 className='font-passeroOne text-xl'>{price.toLocaleString("pt-BR", {style:"currency", currency:"BRL"})}</h4>
        </div>
    )
}
