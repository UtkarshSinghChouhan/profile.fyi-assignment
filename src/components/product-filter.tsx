"use client";
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useCallback } from 'react'

const ProductFilter = () => {

    const router = useRouter();
    const searchParams = useSearchParams()

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString())
            params.set(name, value)

            return params.toString()
        },
        [searchParams]
    )

    return (
        <aside className='sticky flex flex-col top-[71px] h-[calc(100vh-71px)] w-[210px] overflow-auto '>
            {[...new Array(10)].map((_, idx) => {
                return (
                    <button
                        onClick={() => {
                            router.push('?' + createQueryString('filter', idx.toString()))
                        }}
                        className='bg-white text-left hover:bg-slate-200 rounded-lg py-2 px-4'
                    >
                        THist ist a
                    </button>
                )
            })}

        </aside>
    )
}

export default ProductFilter