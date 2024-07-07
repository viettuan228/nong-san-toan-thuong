import React, { useEffect, useState } from 'react'
import WrapperBreads from '../../components/wrapperBreads'
import { NAME_NAV_ITEM, ROUTES } from '../../constants'
import DropDown from '../../components/dropdown'
import { featureProductItemList } from '../../data/jSonData/producItem'
import CardProductItem from '../../components/cards/CardProductItem'
import Pagination from '../../components/pagination'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { ROUTER_NAME } from '../../constants/routesName'
import CategoriesShop from './Components/CategoriesShop'
import FilterByPrice from './Components/FilterByPrice'
import BestSeller from './Components/BestSeller'
import ProductBanner from '../../layout/Banner/ProductBanner'
import ShopLayout from '../../layout/ShopLayout'

function Shop() {
    // eslint-disable-next-line no-unused-vars
    const [breadCrumb, setBreadCrumb] = useState([
        {
            id: 1,
            namePage: NAME_NAV_ITEM.shop,
            urlLink: ROUTES.shop,
        },
    ])
    const ITEM_PER_PAGE = 9
    const { page } = useParams()
    let pageNumber = Number(page)
    const navigator = useNavigate()
    const [activeView, setActiveView] = useState('grid')
    const [numberFilter, setNumberFilter] = useState(9)
    const [filterType, setFilterType] = useState(0)

    // eslint-disable-next-line no-unused-vars
    const handleFilterTitle = () => {
        switch (filterType) {
            case 0:
                return 'Default sorting'
            case 1:
                return 'Sort by Popularity'
            case 2:
                return 'Sort by average rating'
            case 3:
                return 'Sort by later'
            case 4:
                return 'Sort by price: low to high'
            case 5:
                return 'Sort by price: high to low'
            default:
                return 'Default sorting'
        }
    }

    const handleActiveView = (activeType) => {
        setActiveView(activeType)
    }

    const filterTypeList = [
        {
            id: 0,
            title: 'Default sorting',
            handleClick: () => {
                setFilterType(0)
            },
        },
        {
            id: 1,
            title: 'Sort by Popularity',
            handleClick: () => {
                setFilterType(1)
            },
        },
        {
            id: 2,
            title: 'Sort by average rating',
            handleClick: () => {
                setFilterType(2)
            },
        },
        {
            id: 3,
            title: 'Sort by later',
            handleClick: () => {
                setFilterType(3)
            },
        },
        {
            id: 4,
            title: 'Sort by price: low to high',
            handleClick: () => {
                setFilterType(4)
            },
        },
        {
            id: 5,
            title: 'Sort by price: high to low',
            handleClick: () => {
                setFilterType(5)
            },
        },
    ]
    const filterByNumber = [
        {
            title: 'Show: 9',
            handleClick: () => {
                setNumberFilter(9)
            },
        },
        {
            title: 'Show: 12',
            handleClick: () => {
                setNumberFilter(12)
            },
        },
        {
            title: 'Show: 24',
            handleClick: () => {
                setNumberFilter('24')
            },
        },
        {
            title: 'Show: All',
            handleClick: () => {
                setNumberFilter('All')
            },
        },
    ]
    const renderProduct = featureProductItemList
        .filter((_, index) => {
            if (pageNumber === 1)
                return index * pageNumber < ITEM_PER_PAGE * pageNumber
            else if (
                pageNumber <
                Math.ceil(featureProductItemList.length / ITEM_PER_PAGE)
            ) {
                return (
                    index < ITEM_PER_PAGE * pageNumber && index >= ITEM_PER_PAGE
                )
            } else {
                return (
                    index < ITEM_PER_PAGE * pageNumber &&
                    index >=
                        (Math.ceil(
                            featureProductItemList.length / ITEM_PER_PAGE
                        ) -
                            1) *
                            ITEM_PER_PAGE
                )
            }
        })
        .map((item) => {
            return (
                <NavLink
                    to={ROUTER_NAME.shop + '/' + page + '/' + item.id}
                    key={item.id}
                    className="py-2 w-fit flex justify-end"
                >
                    <CardProductItem productItem={item} />
                </NavLink>
            )
        })

    useEffect(() => {
        if (!page) navigator(ROUTER_NAME.shop + '/1')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <ShopLayout wrap={<WrapperBreads breadCrumb={breadCrumb} />}>
            <div className="w-full">
                <div className="shop__content w-full">
                    <div className="shop__content__breadsCrumb w-full py-4"></div>
                    <div className="shop__content__filter w-full flex items-center justify-between">
                        <div className="text-[24px] font-bold">
                            <h2>{NAME_NAV_ITEM.shop}</h2>
                        </div>
                        <div className="flex items-center justify-end">
                            <div className="mr-4">
                                <DropDown
                                    text={filterTypeList[filterType].title}
                                    itemList={filterTypeList}
                                />
                            </div>
                            <div className="mr-14">
                                <DropDown
                                    text={`Show: ${numberFilter}`}
                                    itemList={filterByNumber}
                                />
                            </div>
                            <button
                                className={`${
                                    activeView === 'grid'
                                        ? 'text-lime'
                                        : 'text-gray'
                                } hover:text-lime transition duration-300 text-2xl`}
                                onClick={() => handleActiveView('grid')}
                            >
                                <i className="fa-solid fa-table-cells"></i>
                            </button>
                            <button
                                className={`${
                                    activeView === 'list'
                                        ? 'text-lime'
                                        : 'text-gray'
                                } hover:text-lime transition duration-300 text-2xl ml-4`}
                                onClick={() => handleActiveView('list')}
                            >
                                <i className="fa-solid fa-list"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <hr className="h-[1px] w-full bg-gray text-gray2 my-4" />
                <div className="shop_product w-full flex justify-between">
                    <div className="w-[25%] px-8 flex flex-col gap-6">
                        <CategoriesShop />
                        <FilterByPrice />
                        <BestSeller />
                    </div>
                    <div className="w-[75%]">
                        <div className="w-full flex justify-end">
                            <div className="w-full grid grid-cols-3 gap-x-2 gap-y-2 justify-end">
                                {renderProduct}
                            </div>
                        </div>
                        <div className="shop__pagination w-full flex justify-start">
                            <Pagination
                                total={featureProductItemList.length}
                                itemPage={ITEM_PER_PAGE}
                                page={page}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </ShopLayout>
    )
}

export default Shop
