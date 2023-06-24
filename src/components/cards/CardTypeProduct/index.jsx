import React from 'react'
const CardTypeProduct = (props) => {
    const { typeProductItem } = props
    return (
        <div className="cardTypeProduct max-w-[272px] max-h-[338px] w-full text-center mx-auto border border-gray2 shadow-md transition-all duration-300 ease-in-out cursor-pointer hover:border-lime group">
            <div className="cardTypeProduct__content px-[30px] pt-[50px] pb-[30px] w-full h-full">
                <div className="cardTypeProduct__content__img w-full flex justify-center my-4">
                    <img
                        className="w-fit group-hover:animate-bounce"
                        alt={typeProductItem.productTypeName}
                        src={typeProductItem.itemImg}
                    />
                </div>
                <div className="cardTypeProduct__content__text">
                    <h2 className="capitalize font-bold text-2xl">
                        {typeProductItem.productTypeName}
                    </h2>
                    <p className="uppercase text-lime text-xs mt-2 font-bold">
                        {typeProductItem.itemNumber} items
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CardTypeProduct
