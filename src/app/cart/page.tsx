'use client'

import { fetchCartItems } from "@/lib/appwrite/actions/shopping-cart.actions"
import { useQuery } from "@tanstack/react-query"


const Cart = () => {

  
  const { data: CART_DATA, isLoading : cartLoading } = useQuery({
    queryFn: () => fetchCartItems(),
    queryKey: ["cart-data"],
  })

  // console.log("CART_DATA===============",CART_DATA)

  if(cartLoading){
    return <>Loading...</>
  }


  return (
    <div>Cart</div>
  )
}

export default Cart