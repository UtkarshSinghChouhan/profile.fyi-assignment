"use client";
import ProductFilter from '@/components/product-filter'
import { useRouter } from 'next/navigation'
import React from 'react'

const Products = () => {

   const router = useRouter();

  return (
    <>
      <div className='bg-slate-400 h-28 w-full'></div>
      <div className='flex w-full'>

        <ProductFilter />

        <div className='flex-1 grid w-full grid-cols-fs-product justify-evenly gap-x-6 gap-y-9 lg:justify-between'>
          {[...new Array(50)].map((_, idx) => {
            return (
              <div className='h-48 bg-black text-white'>
                <button onClick={() => router.push(`/${idx.toString()}`)}>
                  view
                </button>
              </div>
            )
          })}
          
        </div>

      </div>
    </>
  )
}

export default Products