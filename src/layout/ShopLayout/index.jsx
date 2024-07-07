import React from 'react'
import ProductBanner from '../Banner/ProductBanner'

function ShopLayout({ children, wrap }) {
    return (
        <div className="w-full flex flex-col gap-[40px]">
            <div className="w-full ">
                <ProductBanner>{wrap}</ProductBanner>
            </div>
            <div className="mx-auto container">{children}</div>
        </div>
    )
}

export default ShopLayout
