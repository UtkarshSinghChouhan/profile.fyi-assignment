import React from 'react'

const Header = () => {
    return (
        <>
            <header className='flex justify-center fixed z-10 top-0 left-0 right-0 h-[71px] bg-white shadow-lg'>
                <div className='flex justify-between items-center flex-1 max-w-7xl lg:max-w-8xl px-[11px] sm:px-10 lg:px-20'>
                    <div>icon</div>
                    <div>cart</div>
                </div>
            </header>
            <div className='h-[71px] shrink-0' />
        </>
    )
}

export default Header