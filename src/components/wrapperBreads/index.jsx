import React from 'react'
import { NavLink } from 'react-router-dom'
import { ROUTES } from '../../constants'

function WrapperBreads(props) {
    const { breadCrumb } = props
    const renderBreadCrumb = breadCrumb?.map((item) => (
        <NavLink key={item.id} to={item.urlLink}>
            <div className="flex items-center h-full pl-2 group">
                <i className="fas fa-chevron-right text-lime text-sm"></i>
                <p className="pl-2 group-hover:text-lime group-hover:font-bold transition duration-300">
                    {item.namePage}
                </p>
            </div>
        </NavLink>
    ))
    return (
        <div className="wrapperBreads w-full flex items-center">
            <NavLink to={ROUTES.home}>
                <div className="flex items-center h-full group">
                    <i className="fas fa-home"></i>
                    <p className="pl-2 group-hover:text-lime group-hover:font-bold transition duration-300">
                        Home
                    </p>
                </div>
            </NavLink>
            {renderBreadCrumb}
        </div>
    )
}

export default WrapperBreads
