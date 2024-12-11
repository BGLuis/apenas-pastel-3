import React from 'react'
import { Product } from "@/components/Product";

type response = {
    id: number,
    image: string,
    name: string,
    Ingredients: string,
    price: number,
    Allergies: [string]
}

export default async function page() {
    const savory:[response] = await fetch("http://localhost:5000/savory").then((res)=>{return res.json()})
    const sweet:[response] = await fetch("http://localhost:5000/sweet").then((res)=>{return res.json()})
    const drinks:[response] = await fetch("http://localhost:5000/drinks").then((res)=>{return res.json()})

    return (
        <>
            <div id='savory' className='gap-7 flex flex-col'>
                <h1 className='text-white bg-primary w-2/3 text-center mx-auto p-1 font-passeroOne rounded-md text-4xl mb-7'>Salgados</h1>
                {
                    savory && savory.map((pasta) => (
                        <Product.Root key={pasta.id}>
                            <Product.Img image={pasta.image} alt={pasta.name}/>
                            <Product.Text name={pasta.name} Ingr={pasta.Ingredients} price={pasta.price}/>
                            <Product.Allergies allergies={pasta.Allergies}/>
                        </Product.Root>
                    ))
                }
            </div>
            <div id='sweet' className='gap-5 flex flex-col'>
                <h1 className='text-white bg-primary w-2/3 text-center mx-auto p-1 font-passeroOne rounded-md text-4xl mb-7'>Docês</h1>
                {
                    sweet && sweet.map((pasta) => (
                        <Product.Root key={pasta.id}>
                            <Product.Img image={pasta.image} alt={pasta.name}/>
                            <Product.Text name={pasta.name} Ingr={pasta.Ingredients} price={pasta.price}/>
                            <Product.Allergies allergies={pasta.Allergies}/>
                        </Product.Root>
                    ))
                }
            </div>
            <div id='drinks' className='gap-5 flex flex-col'>
                <h1 className='text-white bg-primary w-2/3 text-center mx-auto p-1 font-passeroOne rounded-md text-4xl mb-7'>Bebidas</h1>
                {
                    drinks && drinks.map((drink) => (
                        <Product.Root key={drink.id}>
                            <Product.Img image={drink.image} alt={drink.name}/>
                            <Product.Text name={drink.name} price={drink.price}/>
                        </Product.Root>
                    ))
                }
            </div>
        </>
    )
}
