import { FC } from 'react'
import { Link } from 'react-router-dom'

import logo from '../../public/icons/logo.svg'

const Header:FC = ():JSX.Element => {
    return (
        <header className='py-[15px] bg-black mb-[20px]'>
            <div className="container flex items-center gap-x-[45px]">
                <Link to='/'>
                    <img className='max-w-[45px]' src={logo} alt="logo"/>
                </Link>
                <h2 className='text-white text-[18px] uppercase'>
                    Test Task for bidus digital
                </h2>
            </div>
        </header>
    )
}

export default Header
