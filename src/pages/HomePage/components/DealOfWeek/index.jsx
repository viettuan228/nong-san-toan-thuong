import React from 'react'
import iconHeart from '../../../../assets/images/banner/heartIcon.jpg'
import iconSale from '../../../../assets/images/banner/saleIcon1.jpg'
import iconBottle from '../../../../assets/images/banner/bottleIcon.jpg'
import iconTransform from '../../../../assets/images/banner/transformIcon.jpg'
import dealItem from '../../../../assets/images/banner/dealOfWeek.jpg'
import DealOfWeekItem from './components/DealOfWeekItem'
function DealOfWeek(props) {
    return (
        <div className="dealOfWeek w-full py-20 flex flex-col items-center">
            <div className="flex flex-col items-center">
                <h1 className="text-title-b-44">Deal of the Week</h1>
                <div className="w-[120px] h-[5px] bg-lime mt-4" />
            </div>
            <div className="dealOfWeek__content w-full grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-1 gap-4 md:pt-0">
                <div className="flex flex-col">
                    <DealOfWeekItem
                        cusClass="sm:text-right text-left md:ml-0 ml-4"
                        icon={iconHeart}
                        title="Eat Healthier"
                        des="Modi tempora incidunt ut labore dolore magnam aliquam"
                    />
                    <DealOfWeekItem
                        cusClass="sm:text-right text-left md:ml-0 ml-4"
                        icon={iconSale}
                        title="We Have Brands"
                        des="Modi tempora incidunt ut labore dolore magnam aliquam"
                    />
                </div>
                <div className="md:block hidden w-full">
                    <img className="w-fit" alt="deal img" src={dealItem} />
                </div>
                <div className="flex flex-col">
                    <DealOfWeekItem
                        cusClass="text-left md:ml-0 ml-4"
                        icon={iconBottle}
                        title="Fresh And Clean Products"
                        des="Modi tempora incidunt ut labore dolore magnam aliquam"
                    />
                    <DealOfWeekItem
                        cusClass="text-left md:ml-0 ml-4"
                        icon={iconTransform}
                        title="Modern Process"
                        des="Modi tempora incidunt ut labore dolore magnam aliquam"
                    />
                </div>
            </div>
        </div>
    )
}

export default DealOfWeek
