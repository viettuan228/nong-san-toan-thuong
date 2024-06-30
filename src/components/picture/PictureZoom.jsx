import React, { useEffect, useState } from 'react'
import './style.scss'

function PictureZoom({ url, alt }) {
    const [bgState, setBgState] = useState()

    const handleMouseMove = (e) => {
        const { left, top, width, height } = e.target.getBoundingClientRect()
        const x = ((e.pageX - left) / width) * 100
        const y = ((e.pageY - top) / height) * 100
        setBgState((prevBg) => ({
            ...prevBg,
            backgroundPosition: `${x}% ${y}%`,
        }))
    }

    const handleMouseLeave = () => {
        setBgState((prevBg) => ({
            ...prevBg,
            backgroundPosition: `0% 0%`,
        }))
    }
    useEffect(() => {
        setBgState({
            backgroundImage: `url(${url})`,
            backgroundPosition: '0% 0%',
        })
    }, [url])
    return (
        <div
            className="pictureZoom"
            style={bgState}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <img className="pictureZoom__img" src={url} alt={alt} />
        </div>
    )
}

export default PictureZoom
