import React from 'react'
import { Button } from "@/components/ui/button"
import { Heart, Search, ShoppingCart, UserCircle } from 'lucide-react'
import { IItensToShoppingCart } from '../model/types'

const ButtonUser = () => {
  return <Button size={'default'} className='cursor-pointer' variant="default"><a href="#"><UserCircle /></a><span>Minha Conta</span></Button>
}
const ButtonHeart = () => {
  return <Button size={'default'} className='cursor-pointer bg-red-500 hover:bg-red-400' variant="default"><a href="#"><Heart /></a><span>Favoritos</span></Button>
}

const ButtonSearch = () => {
  return <Button size={'default'} className='cursor-pointer rounded-4xl' variant="default"><Search /></Button>
}

const ButtonShippingCart = (props: IItensToShoppingCart) => {
  return (
    <button className="flex justify-start items-center gap-2 w-48 h-16 px-4 py-4 bg-green-500 hover:bg-green-400 rounded-md cursor-pointer">
      <ShoppingCart className="w-10 h-12" color='#fff' />
      <div className="text-left">
        <span className="font-bold text-white uppercase">Carrinho</span>
        <p className="text-sm text-white">{(props.countItensToShippingCart === null ? 0 : Math.abs(props.countItensToShippingCart))} produtos</p>
      </div>
    </button>


  );
}

export { ButtonUser, ButtonHeart, ButtonSearch, ButtonShippingCart }