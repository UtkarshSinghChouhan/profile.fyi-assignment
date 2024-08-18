"use client";
import DynamicImage from '@/components/dynamic-image';
import ProductCard from '@/components/product-card';
import ProductFilter from '@/components/product-filter'
import { FetchUtils } from '@/lib/fetch-utils';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';
import { useEffect, useMemo } from 'react';

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
      <div className='text-center pb-10 text-[50px] font-semibold w-full'>
        Best Seller
      </div>
      <div className='flex w-full'>

        <ProductFilter />

        <div className='flex flex-col flex-1'>

          <div className='pb-4 w-full'>
            chip goes here

            <button className='text-'>

            </button>
          </div>

          <div className='grid w-full grid-cols-fs-product justify-between gap-x-8 gap-y-9 lg:justify-between'>

            {ALL_PRODUCTS?.map((product) => {

              const {id, brand : brandName, title: productName, category, price, discountPercentage, images, rating} = product

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
                    productImage : images[0],
                    rating
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

          <div ref={ref} className='bg-blue-500 min-h-5 w-full'/>

        </div>


      </div>
    </>
  )
}

export default Products