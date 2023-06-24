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

const HomePage = () => {
    return (
        <div className="home ">
            <div className="home__banner min-h-screen w-full">
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
