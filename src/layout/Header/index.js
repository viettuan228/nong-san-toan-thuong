import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo-wide.png'
import { NAV_ITEM } from '../../constain'
import './header.scss'
const Header = () => {
    const [toggleNav, setToggleNav] = useState(false)
    const renderNavList = NAV_ITEM.map((item, index) => {
        return (
            <NavLink key={index} to={item.urlLink}>
                <div className="font-bold md:px-4 md:py-0 py-2 navItem uppercase ">
                    {item.name}
                </div>
            </NavLink>
        )
    })
    const handdleToggleNav = () => {
        setToggleNav(!toggleNav)
    }

    return (
        <div className="relative">
            <header className="container flex items-center justify-between h-[80px] py-2">
                <div className="h-[80px]">
                    <img className="h-full" alt="hong treo gio" src={logo} />
                </div>
                <nav className="lg:flex items-center hidden">
                    {renderNavList}
                </nav>
                <div className="barToggle lg:hidden block">
                    <button
                        className="w-[80px] h-[80px] hover:text-lime font-bold transition duration-300 text-xl"
                        onClick={handdleToggleNav}
                    >
                        <i className="fa-solid fa-bars"></i>
                    </button>
                </div>
                {/* <div>Icon</div> */}
            </header>
            <div
                id="modalToggle"
                className={`modalToggle lg:hidden block absolute h-screen w-screen bg-white top-0 right-0 bottom-0 z-[1000]  ${
                    toggleNav
                        ? 'translate-x-[0] opacity-100'
                        : `translate-x-[100%] opacity-0`
                } transition duration-300 ease-in-out`}
            >
                <div className="w-full h-full relative">
                    <div className="modalToggle__header w-full flex p-4 items-center justify-between border-b-2 border-b-lime">
                        <div className="h-[50px]">
                            <img
                                className="h-full"
                                alt="hong treo gio"
                                src={logo}
                            />
                        </div>
                        <button
                            className="w-[50px] h-[50px] hover:text-lime font-bold transition duration-300 text-xl"
                            onClick={handdleToggleNav}
                        >
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                    <div className="modalToggle__body p-4">{renderNavList}</div>
                    <div className="modalToggle__footer w-full absolute right-0 left-0 bottom-0">
                        <div className="w-full h-[50px] bg-lime text-white flex items-center mt-4">
                            <div className="w-full container flex items-center justify-between">
                                <p>
                                    Copyright © 2023 Nông sản Toàn Thương – All
                                    Rights Reserved.
                                </p>
                                <div className="h-full text-white text-lg flex items-center">
                                    <div className="w-[30px] h-[30px] rounded border border-white text-white hover:text-lime hover:bg-white hover:rounded-full flex items-center justify-center transition duration-300 ease-in-out cursor-pointer">
                                        <i className="fab fa-facebook-f "></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
