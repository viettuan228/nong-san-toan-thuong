import React, { useEffect, useRef, useState } from 'react'
import TitleWithIcon from '../../../components/title/TileWithIcon'

function FilterByPrice({ initValue = 80000, min = 0, max = 120000, step }) {
    const [value, setValue] = useState(initValue)
    const progressBarRef = useRef(null)

    const handleMouseMove = (e) => {
        if (progressBarRef.current) {
            const progressBar = progressBarRef.current
            const rect = progressBar.getBoundingClientRect()
            const offsetX = e.clientX - rect.left
            const newValue = Math.min(
                Math.max((offsetX / rect.width) * max, min),
                max
            )
            setValue(newValue)
        }
    }

    const handleMouseUp = (e) => {
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
    }

    const handleMouseDown = () => {
        document.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mouseup', handleMouseUp)
    }

    return (
        <div className="flex flex-col gap-8">
            <TitleWithIcon text="Filter by price" />
            <div
                className="h-[10px] w-full bg-gray2 rounded-full"
                ref={progressBarRef}
                onMouseDown={handleMouseDown}
            >
                <div
                    className={`h-[10px] bg-lime rounded-full`}
                    style={{ width: `${(value / max) * 100}%` }}
                ></div>
            </div>
            <div className="flex items-center justify-between">
                <p>Price: 0 - 80.000đ</p>
                <button>Filter</button>
            </div>
        </div>
    )
}

export default FilterByPrice
