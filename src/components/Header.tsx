import Link from 'next/link'
import React from 'react'

export default function Header() {
    return (
        <header className='bg-primary text-white flex justify-center h-16 '>
            <div className='max-screen flex justify-between items-center px-5 font-passeroOne'>
                <Link href="/" className='text-2xl'>Apenas Pastel 3.0</Link>
                <nav className='flex gap-5'>
                    <Link href="/">Inicio</Link>
                    <Link href="/about">Nos</Link>
                    <Link href="/menu">Cardapio</Link>
                </nav>
            </div>
        </header>
    )
}
