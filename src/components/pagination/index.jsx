import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTER_NAME } from '../../constants/routesName'

function Pagination({ total, itemPage, page }) {
    const totalPageNumber = Math.ceil(total / itemPage)
    const navigator = useNavigate()
    const handleClick = (page) => {
        navigator(ROUTER_NAME.shop + '/' + page, { replace: true })
    }
    const renderPagination = () => {
        let pagination = []
        for (let i = 1; i <= totalPageNumber; i++) {
            pagination.push(
                <button
                    key={i}
                    className={`w-[40px] h-[40px] font-bold border rounded-lg ${
                        Number(page) !== i
                            ? ' border-gray2 text-black'
                            : 'border-limeHover text-white bg-limeHover'
                    } hover:border-limeHover  hover:text-white hover:bg-limeHover mr-4 transition duration-300 ease-in-out`}
                    onClick={() => handleClick(i)}
                >
                    {i}
                </button>
            )
            if (i >= page + 10) break
        }
        return pagination
    }
    return <div className="flex items-center py-4">{renderPagination()}</div>
}

export default Pagination
