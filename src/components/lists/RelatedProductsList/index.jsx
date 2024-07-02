import React from 'react'
import { relatedProductData } from '../../../data'
import CardProductItem from '../../cards/CardProductItem'

function RelatedProductsList(props) {
    const renderRelatedProductList = relatedProductData.map((item) => {
        return <CardProductItem key={item.id} productItem={item} />
    })
    return (
        <div className="w-full mx-auto flex gap-4 flex-col">
            <h1 className="font-bold text-4xl text-center">Related Products</h1>
            <div className="w-full flex flex-row gap-4 justify-center">
                {renderRelatedProductList}
            </div>
        </div>
    )
}

export default RelatedProductsList
