import React, { useState, useRef, useEffect } from 'react'
import './style.scss'

const AdjustableProgressBar = ({ min = 0, max = 100, step = 1 }) => {
    const [minValue, setMinValue] = useState(min)
    const [maxValue, setMaxValue] = useState(max)
    const [dragging, setDragging] = useState(null)
    const progressRef = useRef(null)

    const getPercentage = (value) => ((value - min) / (max - min)) * 100

    const handleMouseMove = (e) => {
        if (dragging !== null) {
            const rect = progressRef.current.getBoundingClientRect()
            const offsetX = e.clientX - rect.left
            const newValue = min + (offsetX / rect.width) * (max - min)
            if (dragging === 'min') {
                setMinValue(Math.min(newValue, maxValue - step))
            } else {
                setMaxValue(Math.max(newValue, minValue + step))
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
        <div className="range-slider">
            <div className="range-values">
                Price: ${minValue.toFixed(2)} — ${maxValue.toFixed(2)}
            </div>
            <div ref={progressRef} className="slider-container">
                <div
                    className="slider-track"
                    style={{
                        background: `linear-gradient(to right, #ddd ${getPercentage(
                            minValue
                        )}%, #76c7c0 ${getPercentage(
                            minValue
                        )}%, #76c7c0 ${getPercentage(
                            maxValue
                        )}%, #ddd ${getPercentage(maxValue)}%)`,
                    }}
                />
                <div
                    className="thumb thumb-left"
                    style={{ left: `${getPercentage(minValue)}%` }}
                    onMouseDown={handleMouseDown('min')}
                />
                <div
                    className="thumb thumb-right"
                    style={{ left: `${getPercentage(maxValue)}%` }}
                    onMouseDown={handleMouseDown('max')}
                />
            </div>
            <button className="filter-button">Filter</button>
        </div>
    )
}

export default AdjustableProgressBar
