import React, { useState } from 'react'
import { FaAngleUp, FaAngleDown } from 'react-icons/fa6'

function NumberInput({ name, label = '', value = 1, max = 999 }) {
    const [quantity, setQuantity] = useState(1)

    const handleQuantityIncrease = () => {
        if (quantity < 999) setQuantity(quantity + 1)
    }

    const handleQuantityDecrease = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1)
        }
    }

    const handleChange = (e) => {
        const value = e.target.value
        setQuantity(value)
    }
    const handleBlur = () => {
        if (!quantity) {
            setQuantity(1)
        }
    }
    return (
        <div className="h-full w-full border-[1px] border-gray hover:border-black p-2 rounded relative">
            {label && <label htmlFor={name}>{label}</label>}
            <span
                className="absolute top-2 right-2 group cursor-pointer"
                onClick={handleQuantityIncrease}
            >
                <FaAngleUp className="text-gray group-hover:text-black transition-colors" />
            </span>
            <input
                className="w-full h-full font-bold text-center pr-3"
                defaultValue={quantity}
                value={quantity}
                name={name}
                type="number"
                min={0}
                max={max}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            <span
                className="absolute bottom-2 right-2 group cursor-pointer"
                onClick={handleQuantityDecrease}
            >
                <FaAngleDown className="text-gray group-hover:text-black transition-colors" />
            </span>
        </div>
    )
}

export default NumberInput
