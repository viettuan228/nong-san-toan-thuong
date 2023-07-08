import React from 'react'
import ButtonTransparent from '../../../buttons/buttonTransparent'
const BannerItem = (props) => {
    const { bgBanner, itemImg, description, intro, productName } = props
    return (
        <div className="bannerItem w-full md:min-h-screen md:h-full md:py-0 py-8 relative flex items-center justify-between">
            <div className="bannerItem__content relative flex items-center justify-around w-full h-full z-50 px-[100px]">
                <div className="bannerItem__left md:w-[50%] w-full h-full flex items-center justify-center">
                    <div className="md:text-left text-center">
                        <p className="text-title-lime">{productName}</p>
                        <h2 className="text-des-48 py-4">{description}</h2>
                        <p className="text-gray-normal">{intro}</p>
                        <div className="pt-6">
                            <ButtonTransparent text="SHOP NOW" />
                        </div>
                    </div>
                </div>
                <div className="md:flex hidden banner__right w-[50%] items-center justify-center p-10">
                    <img className="w-fit" alt={productName} src={itemImg} />
                </div>
            </div>
            <div className="w-full h-full absolute top-0 left-0 right-0 bottom-0 z-[1]">
                <img className="h-full" alt={description} src={bgBanner} />
            </div>
        </div>
    )
}

export default BannerItem
