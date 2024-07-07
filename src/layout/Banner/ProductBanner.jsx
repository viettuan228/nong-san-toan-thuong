import React from 'react'

function ProductBanner({ children }) {
    return (
        <div className="w-full h-[400px] relative flex items-center justify-center">
            <div className="w-full h-full absolute top-0 left-0">
                <img
                    className="w-full h-full object-cover"
                    src="https://wgl-demo.net/nativefarm/wp-content/uploads/2021/01/title-11.jpg"
                    alt="https://wgl-demo.net/nativefarm/wp-content/uploads/2021/01/title-11.jpg"
                />
            </div>
            <div className="bg-black opacity-10 absolute w-full h-full top-0 left-0" />
            <div className="w-full relative flex justify-center">
                {children}
            </div>
        </div>
    )
}

export default ProductBanner
