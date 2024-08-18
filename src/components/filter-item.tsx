// import { FilterItemCode } from '@/models/enums';
// import { IFilterItemData } from '@/models/interfaces'
// import clsx from 'clsx'
// import React from 'react'

// interface IFilterItem {
//     filterProps: IFilterItemData;
//     index: number;
//     active: boolean;
//     onClickHandler: Function;
// }

// const FilterItem = ({onClickHandler, index, active, filterProps} : IFilterItem) => {

//     if (filterProps.type === 'separator') {
//         return(
//             <>
//                 <div className={clsx("text-[#8B91A9] text-[16px] 2xl:text-[22px] font-medium px-2 mb-3 select-none", index && "mt-11")}>
//                     {filterProps.label}
//                     <div className="w-[160px] 2xl:w-[219px] h-[1px] bg-[#8B91A9]"/>
//                 </div>
//             </>
//         )
//     }

//     return (
//         <> 
//             <div onClick={() => onClickHandler(filterProps.section, filterProps.value)} className={clsx("flex items-center gap-[0.3rem] 2xl:gap-2 select-none text-fs-text-header-blue text-[14px] 2xl:text-[18px] font-light hover:bg-fs-background-gray px-2 py-3 cursor-pointer", active && "bg-fs-background-gray")}>
//                 {filterProps.label}

//                 {filterProps.value === FilterItemCode.MADE_BY_FORESCRIBE && 
//                     <svg className='h-4 2xl:h-[1.3rem]' viewBox="0 0 27 52" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M0 14.7508L26.6931 0V12.0994L0 26.9445V14.7508Z" fill="#8B3DFF"/>
//                         <path d="M10.1727 51.6279V39.0978L26.6931 30.2284V18.1963L0 33.0413V46.0021L10.1727 51.6279Z" fill="#8B3DFF"/>
//                     </svg>
//                 }

//             </div> 
//         </>
//     )
// }

// export default FilterItem