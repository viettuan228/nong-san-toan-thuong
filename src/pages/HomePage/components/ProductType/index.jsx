import React from 'react'
import CardTypeProduct from '../../../../components/cards/CardTypeProduct'

function ProductType(props) {
    const { productTypeList } = props
    const renderProductTypeList = () => {
        return productTypeList?.map((typeItem) => (
            <CardTypeProduct key={typeItem.id} typeProductItem={typeItem} />
        ))
    }
    return (
        <div className="productTypeList w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-4 gap-2">
            {renderProductTypeList()}
        </div>
    )
}

export default ProductType
