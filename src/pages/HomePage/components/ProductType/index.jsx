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
        <div className="productTypeList w-full flex justify-between items-center">
            {renderProductTypeList()}
        </div>
    )
}

export default ProductType
