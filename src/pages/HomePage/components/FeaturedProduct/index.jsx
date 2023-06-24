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
            }  hover:text-lime text-lg   transition-colors duration-300 ease-in-out px-4 capitalize font-bold`}
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
            <div className="flex items-center justify-center mt-4">
                {renderFeaturedList}
            </div>
            <div className="featuredProduct__list mt-4 grid grid-cols-4 gap-8">
                {renderFeaturedProductItem}
            </div>
        </div>
    )
}

export default FeatureProduct
