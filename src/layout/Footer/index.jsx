import React from 'react'
import logo from '../../assets/images/logo-wide.png'
import { dataFooter } from '../../data'

const Footer = () => {
    const renderFooterItem = (itemList) => {
        return itemList.map((item, index) => (
            <div
                key={index}
                className="pt-2 hover:text-lime hover:font-bold transition duration-300 ease-in-out cursor-pointer"
            >
                {item.name}
            </div>
        ))
    }
    const renderFooter = dataFooter.map((item, index) => (
        <div key={index}>
            <h1 className="font-bold text-black uppercase">{item.title}</h1>
            <div className="mt-4 text-gray ">
                {renderFooterItem(item.itemList)}
            </div>
        </div>
    ))
    return (
        <footer className="w-full homeFooter">
            <div className="container">
                <div className="grid grid-cols-6 gap-4">
                    <div className="homeFooter__logo text-gray col-span-2">
                        <div className="h-[80px]">
                            <img
                                className="h-full"
                                alt="logo hong treo gio"
                                src={logo}
                            />
                        </div>
                        <div className="text-sm">
                            <h3>Địa chỉ: Khu 5, Na Sầm, Văn Lãng, Lạng Sơn</h3>
                            <p className="py-2">Số điện thoại: 0348.774.738</p>
                            <p>Email: vuongthithuong32@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex justify-between col-span-4">
                        {renderFooter}
                    </div>
                </div>
            </div>
            <div className="w-full h-[50px] bg-lime text-white flex items-center mt-4">
                <div className="container flex items-center justify-between">
                    <p>
                        Copyright © 2023 Nông sản Toàn Thương – All Rights
                        Reserved.
                    </p>
                    <div className="h-full text-white text-lg flex items-center">
                        <div className="w-[30px] h-[30px] rounded border border-white text-white hover:text-lime hover:bg-white hover:rounded-full flex items-center justify-center transition duration-300 ease-in-out cursor-pointer">
                            <i className="fab fa-facebook-f "></i>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
