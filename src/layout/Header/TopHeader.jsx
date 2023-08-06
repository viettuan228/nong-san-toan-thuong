import React, { useState } from 'react'
import LoginModal from '../../components/modals/LoginModal'

function TopHeader(props) {
    const [isOpenModal, setIsOpenModal] = useState(false)
    const openModal = () => {
        setIsOpenModal(true)
    }
    const closeModal = () => {
        setIsOpenModal(false)
    }
    return (
        <>
            <div className="w-full h-[45px] bg-bgGray text-sm">
                <div className="container h-full flex items-center justify-between text-black">
                    <div className="flex items-center py-2">
                        <div className="flex items-center px-4 border-r border-r-1 border-gray2">
                            <i className="fa-solid fa-envelope"></i>
                            <p className="pl-2">example@gmail.com</p>
                        </div>
                        <div className="flex items-center px-4">
                            <i className="fa-solid fa-phone"></i>
                            <p className="pl-2">086908xxx8</p>
                        </div>
                    </div>
                    <div className="flex items-center py-2">
                        <div className="flex items-center px-4 border-r border-r-1 border-gray2">
                            <div className="text-black hover:text-lime transition duration-300 ease-in-out cursor-pointer">
                                <i className="fab fa-facebook-f "></i>
                            </div>
                        </div>
                        <button
                            className="flex items-center px-4 hover:text-lime transition duration-300 ease-in-out cursor-pointer"
                            onClick={openModal}
                        >
                            <i className="fa-solid fa-lock"></i>
                            <p className="pl-2">Login</p>
                        </button>
                    </div>
                </div>
            </div>
            <LoginModal isOpenModal={isOpenModal} closeModal={closeModal} />
        </>
    )
}

export default TopHeader
