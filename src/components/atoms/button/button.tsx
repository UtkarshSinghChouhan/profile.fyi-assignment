import { cn } from '@/lib/utils';
import { IButton } from '@/models/interfaces';
import { forwardRef } from 'react';



const Button = forwardRef<HTMLButtonElement, IButton>(
  (
    {
      children,
      onClick,
      isSubmit = false,
      disabled = false,
      variant, 
      padding = 2.5,
      size = 'full',
      weight = 'normal',
      className
    },
    ref
  ) => {
    const inputProps: any = {};
    if (onClick) {
      inputProps.onClick = onClick;
    }

    return (
      <>
        <button
          ref={ref}
          type={isSubmit ? 'submit' : 'button'}
          className={cn(
            // base styles
            `ripple flex items-center justify-center  border text-base font-normal`,

            // disabled
            disabled
              ? `cursor-not-allowed bg-pf-gray text-white`
              : `cursor-pointer`,

            // variant - filled
            !disabled && variant === 'filled' && 'bg-black text-white',

            // variant - outlined
            !disabled && variant === 'outlined' && 'border-black text-black',

            // padding - 0
            padding === 0 && `pb-0 pl-0 pr-0 pt-0`,

            // padding - 2
            padding === 2 && `px-5 py-2`,

            // padding - 2.5
            padding === 2.5 && `px-5 py-2.5`,

            // padding - 3
            padding === 3 && `px-5 py-3`,

            // size
            size === 'auto' ? 'w-max' : 'w-full',

            // font weight
            weight === 'medium' ? 'font-medium' : 'font-normal',

            // Custom Classes
            className
          )}
          {...inputProps}
          
        >
          {children}
        </button>
      </>
    );
  }
);

Button.displayName = 'Button';

export default Button;
