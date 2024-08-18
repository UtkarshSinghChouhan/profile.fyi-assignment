import { IconVariant } from "../../models/types";


interface IIcon {
  icon: IconVariant;
}

const getIcon = (icon: IconVariant) => {
  switch (icon) {
    case 'close':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#2c2c2c" className="group-hover:fill-white">
          <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
        </svg>
      );
    case 'cart':
      return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" >
          <path d="M9.5 20C9.77614 20 10 19.7761 10 19.5C10 19.2239 9.77614 19 9.5 19C9.22386 19 9 19.2239 9 19.5C9 19.7761 9.22386 20 9.5 20Z" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M18.5 20C18.7761 20 19 19.7761 19 19.5C19 19.2239 18.7761 19 18.5 19C18.2239 19 18 19.2239 18 19.5C18 19.7761 18.2239 20 18.5 20Z" fill="black" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M3 3H6.27273L8.46545 13.7117C8.54027 14.08 8.7452 14.4109 9.04436 14.6464C9.34351 14.8818 9.71784 15.0069 10.1018 14.9997H18.0545C18.4385 15.0069 18.8129 14.8818 19.112 14.6464C19.4112 14.4109 19.6161 14.08 19.6909 13.7117L21 6.9999H7.09091" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ></path>
        </svg>
      );
    case 'menu':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
      );

    case 'loader':
      return (
        <svg width="100%" height="100%" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#fff">
          <g fill="none" fillRule="evenodd">
            <g transform="translate(1 1)" strokeWidth="2">
              <circle strokeOpacity=".5" cx="18" cy="18" r="18" />
              <path d="M36 18c0-9.94-8.06-18-18-18">
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 18 18"
                  to="360 18 18"
                  dur="1s"
                  repeatCount="indefinite"
                />
              </path>
            </g>
          </g>
        </svg>
      );

    default:
      return null;
  }
};

export default function Icon({ icon }: IIcon) {
  return <>{getIcon(icon)}</>;
}