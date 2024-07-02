import React from 'react'

function CardProductItem({ productItem }) {
    const { title, image, price, productCat } = productItem
    return (
        <div className="cardProductItem max-w-[300px] h-[350px] cursor-pointer border border-gray2 px-4 pt-7 pb-2 group hover:shadow-2xl hover:border-lime transition duration-300 rounded-lg ease-in-out">
            <div className="cardProductItem__img w-full max-h-[200px] h-[200px] overflow-hidden flex justify-center">
                <img
                    className="h-full group-hover:scale-110 transition duration-300 ease-in-out object-cover"
                    alt={title}
                    src={image}
                />
            </div>
            <div className="cardProductItem__content mt-2 text-center">
                <h1 className="cardProductItem__content__featured text-lime text-sm font-bold uppercase">
                    {productCat[0]}
                </h1>
                <p className="py-2 font-bold text-black">{title}</p>
                <p className="pb-2 font-bold text-black">{price}$</p>
            </div>
        </div>
    )
}

export default CardProductItem
