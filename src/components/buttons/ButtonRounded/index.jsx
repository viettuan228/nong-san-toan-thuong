import React from 'react'
import BaseButton from '../baseButton'

function ButtonRounded({ text, handleFunction, width, height, classCus }) {
    const newClass = ` ${classCus}`
    return (
        <BaseButton
            classCus={newClass}
            text={text}
            handleFunction={handleFunction}
            width={width}
            height={height}
        />
    )
}

export default ButtonRounded
