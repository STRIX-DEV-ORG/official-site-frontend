import React from 'react'

interface CustomButtonProps {
    src?: string | undefined;
    alt?: string | undefined;
    text?: string | undefined;
    href?: string | undefined;
    className: string;
    onClickCallBack: () => {};
  }

const CustomButton: React.FunctionComponent<CustomButtonProps>   = ({
    src,
    alt,
    text,
    href,
    className,
    onClickCallBack
}) => {

    return (
        <a className={className} href={href} onClick={onClickCallBack}>
         { src? 
          <img src={src} alt={alt}/>
         : text}
        </a>
    )
}

CustomButton.defaultProps = {
    src: "",
    alt: "",
    text: "CustomButton",
    href: "#",
  };


export default CustomButton