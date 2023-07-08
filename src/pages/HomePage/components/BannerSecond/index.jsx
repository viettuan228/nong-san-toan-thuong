import React from 'react'
import bg1 from '../../../../assets/images/banner/bg-banner-1.jpg'
import bg2 from '../../../../assets/images/banner/bg-banner2.jpg'
import bg3 from '../../../../assets/images/banner/bg-banner3.jpg'
import itemBanner1 from '../../../../assets/images/banner/item-banner1.png'
import itemBanner2 from '../../../../assets/images/banner/item-banner2.png'
import itemBanner3 from '../../../../assets/images/banner/item-banner3.png'
import './style.scss'
import ButtonLime from '../../../../components/buttons/buttonLime'

function BannerSecond(props) {
    const data = [
        {
            img: itemBanner1,
            bg: bg1,
        },
        {
            img: itemBanner2,
            bg: bg2,
        },
        {
            img: itemBanner3,
            bg: bg3,
        },
    ]
    const renderBanner = data.map((item, index) => (
        <div
            key={index}
            className={`h-full ${
                index !== 1 ? 'col-span-1' : 'sm:col-span-2 col-span-1'
            } flex flex-col items-center sm:justify-between justify-center bg-cover bg-no-repeat group pt-10 pb-8 cursor-pointer`}
            style={{ backgroundImage: `url(${item.bg})` }}
        >
            <div className="w-full h-full flex items-center justify-center">
                <img
                    className="w-fit group-hover:animate-bounce transition duration-300"
                    alt={item.img}
                    src={item.img}
                />
            </div>

            <div className="sm:mt-8 mt-4 sm:invisible visible sm:opacity-0 opacity-100 sm:translate-y-[100%] group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition duration-500 ease-in-out">
                <ButtonLime text="SHOP NOW" />
            </div>
        </div>
    ))

    return (
        <div className="bannerSecond w-full sm:h-[450px] grid sm:grid-cols-4 grid-cols-1">
            {renderBanner}
        </div>
    )
}

export default BannerSecond
