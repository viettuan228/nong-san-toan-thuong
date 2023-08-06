import { useEffect } from 'react'
import HomeBanner from '../../components/sliders/banner/HomeBanner'
import {
    bannerList,
    featureProductItemList,
    featuredProductList,
    typeProductList,
} from '../../data'
import BannerSecond from './components/BannerSecond'
import DealOfWeek from './components/DealOfWeek'
import FeatureProduct from './components/FeaturedProduct'
import ProductType from './components/ProductType'
import { getAllBanner } from '../../store/homeBanner'
import { useDispatch, useSelector } from 'react-redux'

const HomePage = () => {
    const dispatch = useDispatch()
    const dataBanner = useSelector((state) => state.banner.dataHomeBanner)
    console.log('dataBanner', dataBanner)
    useEffect(() => {
        dispatch(getAllBanner())
    }, [dispatch])
    return (
        <div className="home ">
            <div className="home__banner md:min-h-screen w-full">
                <HomeBanner bannerList={bannerList} />
            </div>
            <div className="container pt-20 pb-20">
                <ProductType productTypeList={typeProductList} />
                <FeatureProduct
                    featuredProductList={featuredProductList}
                    featureProductItemList={featureProductItemList}
                />
            </div>
            <BannerSecond />
            <div className="container">
                <DealOfWeek />
            </div>
        </div>
    )
}

export default HomePage
