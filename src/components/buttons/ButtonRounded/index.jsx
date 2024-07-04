import React from 'react'
import BaseButton from '../baseButton'
import './style.scss'

function ButtonRounded({ text, handleFunction, width, height, classCus }) {
    const newClass = `rounded-lg bg-organize border-organize text-organize font-bold ${classCus} bg-transparent hover:text-white hover:border-organizeHover`
    return (
        <div className="buttonRounded w-fit relative overflow-hidden transition rounded-lg">
            <BaseButton
                classCus={newClass}
                text={text}
                handleFunction={handleFunction}
                width={width}
                height={height}
            />
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default ButtonRounded
