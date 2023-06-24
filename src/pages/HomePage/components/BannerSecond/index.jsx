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
                index !== 1 ? 'col-span-1' : 'col-span-2'
            } flex flex-col items-center justify-between bg-cover bg-no-repeat group pt-10 pb-8 cursor-pointer`}
            style={{ backgroundImage: `url(${item.bg})` }}
        >
            <div className="w-full h-full flex items-center justify-center">
                <img
                    className="w-fit group-hover:animate-bounce transition duration-300"
                    alt={item.img}
                    src={item.img}
                />
            </div>

            <div className="mt-8 invisible opacity-0 translate-y-[100%] group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition duration-500 ease-in-out">
                <ButtonLime text="SHOP NOW" />
            </div>
        </div>
    ))

    return (
        <div className="bannerSecond w-full h-[450px] grid grid-cols-4">
            {renderBanner}
        </div>
    )
}

export default BannerSecond
