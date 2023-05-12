import react from 'react'
import CustomButton from '../../components/atoms/Button/CustomButton'

const Nav = () => {

    return (
    <nav>
      <span className="Logo">
        STRIXDEV
      </span>
      <CustomButton 
                src="/icon-hamburger.svg"
                alt='Menu'
                className='menuBtn' 
                onClickCallBack={() => () =>{}}      />
    </nav>
    )
}


export default Nav