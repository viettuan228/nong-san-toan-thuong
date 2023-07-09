import { ROUTER_NAME } from './routesName'
export const NAME_NAV_ITEM = {
    home: 'Trang chủ',
    shop: 'Shop',
    news: 'Tin tức',
    aboutUs: 'Về chúng tôi',
    contact: 'Liên hệ',
}
export const NAVITEM = [
    {
        name: NAME_NAV_ITEM.home,
        urlLink: '/',
    },
    {
        name: NAME_NAV_ITEM.shop,
        urlLink: ROUTER_NAME.shop + '/1',
    },
    {
        name: NAME_NAV_ITEM.news,
        urlLink: ROUTER_NAME.news,
    },
    {
        name: NAME_NAV_ITEM.aboutUs,
        urlLink: ROUTER_NAME.aboutUs,
    },
    {
        name: NAME_NAV_ITEM.contact,
        urlLink: ROUTER_NAME.contact,
    },
]
