import React from 'react'

function NumberInput({ name, label = '', value = 0 }) {
    return (
        <div className="h-full w-full">
            {label && <label htmlFor={name}>{label}</label>}
            <input
                className="w-full h-full"
                defaultValue={value}
                name={name}
                type="number"
                min={0}
            />
        </div>
    )
}

export default NumberInput
