import React, { useEffect, useRef, useState } from 'react'
import TitleWithIcon from '../../../components/title/TileWithIcon'
import ButtonLime from '../../../components/buttons/buttonLime'
import ButtonRounded from '../../../components/buttons/ButtonRounded'

function FilterByPrice({ min = 0, max = 100, step = 1 }) {
    const [minValue, setMinValue] = useState(min)
    const [maxValue, setMaxValue] = useState(max)
    const [dragging, setDragging] = useState(null)
    const progressBarRef = useRef(null)

    const getPercentage = (value) => ((value - min) / (max - min)) * 100

    const handleMouseMove = (e) => {
        if (dragging !== null) {
            const rect = progressBarRef.current.getBoundingClientRect()
            const offsetX = e.clientX - rect.left
            const newValue = min + (offsetX / rect.width) * (max - min)
            if (dragging === 'min') {
                let newMinValue = Math.min(newValue, maxValue - step)
                if (newMinValue >= 0) {
                    setMinValue(Math.min(newValue, maxValue - step))
                }
            } else {
                let newMaxValue = Math.max(newValue, minValue + step)
                if (newMaxValue <= 100) {
                    setMaxValue(Math.max(newValue, minValue + step))
                }
            }
        }
    }

    const handleMouseUp = () => {
        setDragging(null)
    }

    const handleMouseDown = (handle) => () => {
        setDragging(handle)
    }

    useEffect(() => {
        if (dragging !== null) {
            document.addEventListener('mousemove', handleMouseMove)
            document.addEventListener('mouseup', handleMouseUp)
        } else {
            document.removeEventListener('mousemove', handleMouseMove)
            document.removeEventListener('mouseup', handleMouseUp)
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove)
            document.removeEventListener('mouseup', handleMouseUp)
        }
    }, [dragging])

    return (
        <div className="flex flex-col gap-8">
            <TitleWithIcon text="Filter by price" />
            <div className="h-[10px] w-full relative" ref={progressBarRef}>
                <div
                    className={`h-[10px] w-full absolute top-[50%] translate-y-[-50%] bg-lime rounded-full`}
                    style={{
                        background: `linear-gradient(to right, 
                        #ededed ${getPercentage(
                            minValue
                        )}%, #88C74A ${getPercentage(
                            minValue
                        )}%, #88C74A ${getPercentage(
                            maxValue
                        )}%, #ededed ${getPercentage(maxValue)}%)`,
                    }}
                ></div>
                <div
                    className="h-full w-[5%] absolute top-[50%] translate-y-[-50%] z-3 cursor-pointer"
                    style={{ left: `${getPercentage(minValue - 5)}%` }}
                    onMouseDown={handleMouseDown('min')}
                />
                <div
                    className="h-full w-[5%] absolute top-[50%] translate-y-[-50%] z-4 cursor-pointer"
                    style={{ left: `${getPercentage(maxValue - 5)}%` }}
                    onMouseDown={handleMouseDown('max')}
                />
            </div>
            <div className="flex items-center justify-between">
                <p>
                    Price: ${minValue.toFixed(2)} — ${maxValue.toFixed(2)}
                </p>
                <ButtonRounded text="Filter" width="100px" />
            </div>
        </div>
    )
}

export default FilterByPrice
