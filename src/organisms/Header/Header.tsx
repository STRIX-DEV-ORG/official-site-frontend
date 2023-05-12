import React from 'react';
import CustomButton from '../../components/atoms/Button/CustomButton';

const Header = () => {
  // TODO - ADD SOCIAL ICONS
  return (
    <header>
      <div className='primary-background'/>
      <div className='accent-background'/>
      <h1>STRIXDEV</h1>
      <h3>Digital destiny by design</h3>
      <CustomButton 
        text='CONTÁCTANOS'
        className='header-button'
        onClickCallBack={() => () =>{}}
      />
    </header>
  );
};

export default Header;