import React from 'react'
import TitleWithIcon from '../../../components/title/TileWithIcon'
import { relatedProductData } from '../../../data/jSonData/relatedProductData'
import CardHorizontalProductItem from '../../../components/cards/CardHorizontalProductItem'

function BestSeller(props) {
    const renderBestSeller = relatedProductData.map((item) => {
        return (
            <CardHorizontalProductItem
                key={item.id}
                width="full"
                height="75px"
                src={item.image}
                alt={item.title}
                title={item.title}
                oldPrice={item.price}
                newPrice={Math.floor(item.price - (item.price * 10) / 100)}
            />
        )
    })

    return (
        <div className="w-full flex flex-col gap-4">
            <TitleWithIcon text="Best seller" />
            <div className="flex flex-col gap-4">{renderBestSeller}</div>
        </div>
    )
}

export default BestSeller
