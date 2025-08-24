"use client";

import Image from 'next/image'
import InputSearch from './ui/InputSearch';
import ecommerceLogo from '../../../public/ecommerce-logo.png'
import { ButtonHeart, ButtonSearch, ButtonShippingCart, ButtonUser } from './ui/Buttons';

export default function Header() {
    return (
        <header className="max-w-7xl mx-auto w-full shadow-md px-8 py-4 flex items-center justify-between">
            <section className='flex items-center max-w-7xl w-full gap-4'>
                <div className="cursor-pointer">
                    <a href="#"><Image src={ecommerceLogo} width={80} height={80} alt='LogoEcommerce' /></a>
                </div>

                <div className="flex w-2xl gap-4 ">
                    <InputSearch />
                    <ButtonSearch />
                </div>

                <div className="flex items-center gap-4 cursor-pointer">
                    <ButtonUser />
                    <ButtonHeart />
                    <ButtonShippingCart countItensToShippingCart={0}/>
                </div>
            </section>
        </header>
    );
}
