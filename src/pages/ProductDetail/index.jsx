import { useState } from 'react'
import StarRatingIcon from '../../components/icons/StarRatingIcon'
import PictureZoom from '../../components/picture/PictureZoom'
import NumberInput from '../../components/input/NumberInput'
import ButtonLime from '../../components/buttons/buttonLime'
import ButtonRounded from '../../components/buttons/ButtonRounded'

const imgData = [
    {
        url: 'https://wgl-demo.net/nativefarm/wp-content/uploads/2021/02/product-17-1.jpg',
    },
    {
        url: 'https://wgl-demo.net/nativefarm/wp-content/uploads/2021/02/product-17-2.jpg',
    },
]
const ProductDetail = (props) => {
    const [imgActive, setImgActive] = useState(imgData[0].url)

    const handleImgActive = (img) => {
        setImgActive(img)
    }
    const renderPicture = imgData.map((item) => {
        return (
            <div
                className="w-[120px] h-full cursor-pointer overflow-hidden group"
                key={item.url}
                onClick={() => handleImgActive(item.url)}
            >
                <img
                    className="w-full h-full group-hover:scale-125 transition-transform"
                    alt="item"
                    src={item.url}
                />
            </div>
        )
    })

    return (
        <div className="container productDetail w-full min-h-screen my-4 flex flex-col gap-8">
            <div className="w-full flex items-start gap-8">
                <div className="flex flex-col w-[540px] gap-4">
                    <div className="w-[540px] h-[540px]">
                        <PictureZoom url={imgActive} alt={'item picture'} />
                    </div>
                    <div className="w-full h-[120px] flex items-center gap-4">
                        {renderPicture}
                    </div>
                </div>
                <div className="flex w-[540px] flex-col gap-4">
                    <div className="">
                        <h1 className="font-bold text-[36px]">Asparagus</h1>
                        <div className="flex items-center mt-2">
                            <StarRatingIcon />
                            <StarRatingIcon />
                            <StarRatingIcon />
                            <StarRatingIcon />
                            <StarRatingIcon />
                            <span className="ml-2 text-gray text-[12px]">
                                (2 customers reviews)
                            </span>
                        </div>
                    </div>
                    <div className="text-lg text-lime font-semibold">
                        <p>200.000 vnd</p>
                    </div>
                    <div className="text-base flex flex-col gap-4">
                        <p>
                            Pirro Tagliatelle Egg Pasta is an Italian pasta
                            enriched with the flavor and nutrients of free range
                            eggs. This tagliatelle is long, somewhat wide, and
                            high in protein compared to other types of pasta.
                            Tagliatelle pasta is particularly well-paired with
                            rich, creamy sauces.
                        </p>
                        <p>
                            Rigatoni pasta is one of the most popular types of
                            pasta. However, La Fabbrica Della Pasta is not like
                            every other pasta brand! La Fabbrica uses
                            traditional Italian techniques along with natural
                            spring water from Mount Vesuvius.
                        </p>
                    </div>

                    <div className="flex items-center gap-4 border-y-[1px] border-gray2 py-6">
                        <div className="h-[56px] w-[70px] mr-4">
                            <NumberInput name="quantityCart" />
                        </div>
                        <ButtonLime
                            width={'200px'}
                            height={'56px'}
                            classCus="h-[56px] w-[500px]"
                            text="Thêm vào giỏ hàng"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="font-bold">
                            SKU:
                            <span className="text-gray pl-2 font-medium">
                                748973
                            </span>
                        </p>
                        <p className="font-bold">
                            Category:
                            <span className="text-gray pl-2 font-medium">
                                Vegetables
                            </span>
                        </p>
                        <p className="font-bold">
                            Tag:
                            <span className="text-gray pl-2 font-medium">
                                organic
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full"></div>
        </div>
    )
}

export default ProductDetail
