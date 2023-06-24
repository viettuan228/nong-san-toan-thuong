import React from 'react'

function DealOfWeekItem(props) {
    const { icon, title, des, cusClass } = props
    return (
        <div className="flex items-center justify-between group">
            <div className={`${cusClass} pr-6`}>
                <h3 className="capitalize font-bold">{title}</h3>
                <p className="text-gray">{des}</p>
            </div>
            <div className="min-w-[70px] w-[70px] h-[70px] group-hover:animate-bounce transition duration-500 ease-in-out">
                <img className="w-full" alt="iconHeart" src={icon} />
            </div>
        </div>
    )
}

export default DealOfWeekItem
