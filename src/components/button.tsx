import { cn } from '@/lib/utils';
import { ButtonVariant } from '@/models/types';
import { forwardRef } from 'react';

interface IButton {
  children?: any;
  onClick?: Function;
  onBlur?: Function;
  isSubmit?: boolean;
  form?: string;
  disabled?: boolean;
  variant: ButtonVariant;
  padding?: 0 | 2 | 2.5 | 3;
  size?: 'auto' | 'full';
  weight?: 'normal' | 'medium';
  className ?: string;
}

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
    if(className){
        inputProps.className = className
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
              ? `cursor-not-allowed`
              : `cursor-pointer`,

            // variant - filled
            !disabled && variant === 'filled' && 'bg-black text-white',

            // variant - outlined
            !disabled && variant === 'outlined' && 'border-fs-warning-yellow bg-fs-warning-yellow',

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
            weight === 'medium' ? 'font-medium' : 'font-normal'
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
