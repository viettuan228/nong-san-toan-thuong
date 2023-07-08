import React, { useState } from 'react'
import CardProductItem from '../../../../components/cards/CardProductItem'

function FeatureProduct({ featuredProductList, featureProductItemList }) {
    const [selectFeature, setSelectFeature] = useState('oranges')
    const handleSetFeaturedSelected = (featured) => {
        setSelectFeature(featured)
    }
    const renderFeaturedList = featuredProductList?.map((featureItem) => (
        <div
            key={featureItem.id}
            className={`featureLink ${
                featureItem.id === selectFeature ? 'text-lime' : 'text-gray'
            }  hover:text-lime text-lg transition-colors duration-300 ease-in-out md:px-4 px-2 capitalize font-bold whitespace-nowrap`}
        >
            <button onClick={() => handleSetFeaturedSelected(featureItem.id)}>
                <p className="capitalize">{featureItem.featuredProductName}</p>
            </button>
        </div>
    ))
    const renderFeaturedProductItem = featureProductItemList
        .filter((item) => item.productCat.includes(selectFeature))
        ?.map((featuredProductItem, index) => {
            return index < 8 ? (
                <CardProductItem
                    key={featuredProductItem.id}
                    productItem={featuredProductItem}
                />
            ) : (
                ''
            )
        })
    return (
        <div className="featuredProduct w-full flex flex-col items-center mt-16">
            <h1 className="text-title-b-44">Featured Product</h1>
            <div className="flex items-center sm:justify-center md:pb-0 pb-2 mt-4 w-full overflow-x-auto">
                {renderFeaturedList}
            </div>
            <div className="featuredProduct__list mt-4 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-8 md:gap-4 gap-2">
                {renderFeaturedProductItem}
            </div>
        </div>
    )
}

export default FeatureProduct
