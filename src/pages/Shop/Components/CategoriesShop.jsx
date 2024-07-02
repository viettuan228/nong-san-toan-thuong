import React from 'react'
import { typeProductList } from '../../../data'
import TitleWithIcon from '../../../components/title/TileWithIcon'

function CategoriesShop(props) {
    const renderCategories = typeProductList.map((item) => {
        return (
            <div
                className="flex items-center gap-2 group cursor-pointer"
                key={item.id}
            >
                <div className="w-[5px] h-[5px] rounded-full bg-organize" />
                <p className="font-bold text-textDark text-base group-hover:text-organize  transition-colors duration-300">
                    {item.productTypeName}
                </p>
                <div className="min-w-[25px] h-[25px] px-2 flex items-center justify-center text-subTextDark rounded-sm bg-bgGray group-hover:bg-organize group-hover:text-white text-xs font-bold transition-colors duration-300">
                    {item.itemNumber}
                </div>
            </div>
        )
    })
    return (
        <div className="w-full flex flex-col gap-8">
            <TitleWithIcon text="categories" />
            {renderCategories}
        </div>
    )
}

export default CategoriesShop
