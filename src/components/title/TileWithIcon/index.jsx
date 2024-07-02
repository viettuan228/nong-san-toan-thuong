import React from 'react'
import LeafIcon from '../../icons/LeafIcon'

function TitleWithIcon({ text, icon }) {
    return (
        <div className="w-full flex flex-col gap-2 uppercase items-center text-black font-bold text-2xl">
            <div className="h-[21px]">{icon || <LeafIcon />}</div>
            <h1>{text}</h1>
        </div>
    )
}

export default TitleWithIcon
