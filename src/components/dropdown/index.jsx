import React, { useRef, useState } from 'react'

function DropDown(props) {
    const { text, itemList } = props
    const [openDropdown, setOpenDropdown] = useState(false)
    const dropdownRef = useRef(null)

    const handleClick = () => {
        console.log(openDropdown)
        setOpenDropdown(!openDropdown)
    }

    const handleBlur = (event) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.relatedTarget)
        ) {
            setOpenDropdown(false)
        }
    }

    const renderItem = itemList?.map((item, index) => {
        return (
            <div
                className="w-full px-4 hover:bg-lime hover:text-white hover:font-bold 
                transition duration-300 "
                key={index}
            >
                <button
                    className="text-left w-full"
                    onClick={() => {
                        item.handleClick()
                        handleClick()
                    }}
                >
                    {item.title}
                </button>
            </div>
        )
    })

    return (
        <div
            className="relative inline-block text-left"
            onBlur={handleBlur}
            tabIndex={-1}
            ref={dropdownRef}
        >
            <div datatype={text}>
                <button
                    type="button"
                    className={`w-[200px] inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm ${
                        openDropdown
                            ? 'text-lime border-lime font-bold'
                            : 'text-gray border-gray'
                    } shadow-sm border  hover:border-lime
                        hover:text-lime hover:font-bold transition duration-300`}
                    id={text}
                    aria-expanded="true"
                    aria-haspopup="true"
                    onClick={handleClick}
                >
                    <p className="max-w-[180px] break-keep whitespace-nowrap text-ellipsis overflow-hidden ">
                        {text}
                    </p>

                    <svg
                        className="-mr-1 h-5 w-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>

            {openDropdown && (
                <div
                    className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black py-3 ring-opacity-5 focus:outline-none text-sm"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby={text}
                    tabIndex={-1}
                >
                    <div className="py-1 relative" role="none">
                        {renderItem}
                    </div>
                </div>
            )}
        </div>
    )
}

export default DropDown
