import React from 'react'
import { Navigation } from 'swiper'
import { SwiperSlide, Swiper } from 'swiper/react'
import BannerItem from './common/BannerItem'
import './style.scss'
const HomeBanner = ({ bannerList }) => {
    const renderBanner = bannerList?.map((bannerItem) => (
        <SwiperSlide key={bannerItem.id}>
            <BannerItem
                bgBanner={bannerItem.bgBanner}
                itemImg={bannerItem.itemImg}
                description={bannerItem.description}
                intro={bannerItem.intro}
                productName={bannerItem.productName}
            />
        </SwiperSlide>
    ))
    return (
        <div className="homeBanner h-full w-full">
            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                {renderBanner}
            </Swiper>
        </div>
    )
}

export default HomeBanner
