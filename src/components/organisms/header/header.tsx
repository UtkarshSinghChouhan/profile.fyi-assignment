"use client";
import Image from 'next/image'
import React, { useState } from 'react'
import logo from "@/../public/images/logo.webp"
import { NAV_ITEMS } from '@/data/mock/nav-items'
import Link from 'next/link';
import CartWidget from '../../atoms/cart-widget/cart-widget';
import Modal from '../../molecules/modal/modal';
import Icon from '../../atoms/icon/icon';

const Header = () => {
    const [modalOpen, setModalOpen] = useState<boolean>(false);


    return (
        <>
            <header className='flex justify-center fixed z-10 top-0 left-0 right-0 h-[71px]  backdrop-blur-xl border-b border-b-pf-light-gray dark:border-b-pf-darktheme-border dark:bg-pf-darktheme-bg'>
                <div className='w-full h-full max-w-7xl lg:max-w-8xl px-[11px] sm:px-10'>

                    <div className='flex h-full items-center justify-between '>
                        <button className='xl:hidden' onClick={() => setModalOpen(true)}>
                            <Icon icon='menu'/>
                        </button>


                        <div className='flex gap-12 items-center'>

                            <Image src={logo} width={170} alt='logo' />

                            <div className='hidden xl:flex items-center gap-10'>
                                {NAV_ITEMS.map((item, idx) => {
                                    return (
                                        <Link href={item.link as string} key={idx} className='flex flex-col group'>
                                            <span className='text-sm font-extralight dark:text-pf-darktheme-text dark:group-hover:text-pf-darktheme-text-header'>{item.label}</span>
                                            <div className='w-0 group-hover:w-full h-[1px] bg-black dark:bg-pf-darktheme-text dark:group-hover:bg-pf-darktheme-text-header transition-[width]' />
                                        </Link>
                                    )
                                })}
                            </div>

                        </div>

                        <CartWidget />

                    </div>

                </div>
            </header>

            <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} title='Minimalist' >

                <div className='flex flex-col items-start gap-10'>
                    {NAV_ITEMS.map((item, idx) => {
                        return (
                            <div key={idx} className='flex flex-col group'>
                                <span className='text-[16px] font-normal'>{item.label}</span>
                                <div className='w-0 group-hover:w-full h-[1px] bg-black transition-[width]' />
                            </div>
                        )
                    })}
                </div>

            </Modal>

            <div className='h-[71px] shrink-0' />
        </>
    )
}

export default Header