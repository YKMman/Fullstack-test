import { FC } from 'react'
import { Link } from 'react-router-dom'

import logo from '../../public/icons/logo.svg'

const Footer:FC = ():JSX.Element => {
    return (
        <footer className="py-[15px] bg-black">
            <div className="container flex items-center justify-center">
                <Link to='/' className="text-white uppercase flex items-center gap-x-[20px] text-[22px] duration-500 hover:text-red">
                    <img className='max-w-[45px]' src={logo} alt="logo"/>
                    footer
                </Link>
            </div>
        </footer>
    )
}

export default Footer
