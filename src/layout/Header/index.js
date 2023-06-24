import { NavLink } from 'react-router-dom'
import { NAV_ITEM } from '../../constain'
import logo from '../../assets/images/logo-wide.png'
import './header.scss'
const Header = () => {
    const renderNavList = NAV_ITEM.map((item, index) => (
        <NavLink key={index} to={item.urlLink}>
            <div className="font-bold px-4 navItem uppercase"> {item.name}</div>
        </NavLink>
    ))
    return (
        <header className="container flex items-center justify-between h-[80px] py-2">
            <div className="h-[80px]">
                <img className="h-full" alt="hong treo gio" src={logo} />
            </div>
            <nav className="flex items-center">{renderNavList}</nav>
            <div>Icon</div>
        </header>
    )
}

export default Header
