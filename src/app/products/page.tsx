"use client";
import DynamicImage from '@/components/dynamic-image';
import ProductCard from '@/components/product-card';
import ProductFilter from '@/components/product-filter'
import { FetchUtils } from '@/lib/fetch-utils';
import { useInfiniteQuery } from '@tanstack/react-query';
import React, { useEffect, useMemo } from 'react'
import { useInView } from 'react-intersection-observer';

const Products = () => {

  const {ref, inView} = useInView()


  const {data, isLoading, fetchNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryFn: FetchUtils.getProductsData,
    queryKey : ['users'],
    initialPageParam : 0,
    getNextPageParam : (lastPage, allPage, lastPageParam) =>  {
      if(lastPage.length === 0){
        return null;
      }
      
      return lastPageParam + 1;
    }
  })


  const ALL_PRODUCTS = useMemo(
    () => data?.pages.flatMap(user => user),
    [data]
  )


  // Whenever the Intersection Occurs Fetch new Data
  useEffect(() => {

    if(inView){
      fetchNextPage()
    }

  },[fetchNextPage, inView])




  if(isLoading){
    return <>Loading...</>
  }


  return (
    <>
      <div className='bg-slate-400 h-28 w-full'></div>
      <div className='flex w-full'>

        <ProductFilter />

        <div className='flex flex-col flex-1'>

          <div className='grid w-full grid-cols-fs-product justify-between gap-x-8 gap-y-9 lg:justify-between'>

            {ALL_PRODUCTS?.map((product) => {

              const {id, brand : brandName, title: productName, category, price, discountPercentage, images} = product

              return (
                <ProductCard 
                  key={id}
                  {...{
                    id, 
                    brandName,
                    productName,
                    category,
                    price,
                    discountPercentage, 
                    productImage : images[0]
                    
                  }}
                />
              )
            })} 




            {/* Skeleton */}
            {isFetchingNextPage &&
              [... new Array(5)].map((_, idx) => (
                <div key={idx} className='animate-pulse bg-slate-500 opacity-35 min-h-96'></div>
              ))
            }           
          </div>

          <div ref={ref} className='bg-blue-500 min-h-5 w-full'></div>

        </div>


      </div>
    </>
  )
}

export default Products