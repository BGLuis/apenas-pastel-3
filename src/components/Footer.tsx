import { Facebook, Instagram, Twitter } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <footer className='bg-primary text-white flex flex-col items-center mt-auto'>
            <div className='max-screen flex flex-col items-center py-6 px-5 gap-6 font-passeroOne'>
                <div className='flex flex-col gap-3'>
                    <h1 className='text-2xl'>Apenas Pastel 3.0</h1>
                    <div className='py-1 flex justify-around bg-zinc-400 rounded-full'>
                        <Link href='#'><Twitter color="#000"/></Link>
                        <Link href='#'><Facebook color="#000"/></Link>
                        <Link href='#'><Instagram color="#000"/></Link>
                    </div>
                </div>
                <nav className='flex gap-2 text-xl'>
                    <Link href="/">Inicio</Link>|
                    <Link href="/about">Nos</Link>|
                    <Link href="/menu">Cardapio</Link>
                </nav>
            </div>
            <div className='bg-black w-full text-center'>© 2024 | lotem lotem lorem | Feito por L</div>
        </footer>
    )
}
