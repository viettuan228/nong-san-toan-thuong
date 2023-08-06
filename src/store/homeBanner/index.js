import { createSlice } from '@reduxjs/toolkit'
import { API_URL } from '../../constain/apiUrl'
import { getDataWithoutToken } from '../../services'

const initState = {
    loading: false,
    error: null,
    dataHomeBanner: [],
}

const index = createSlice({
    name: 'banner',
    initialState: initState,
    reducers: {
        getAllBannerRequest: (state, action) => {
            state.loading = true
            state.error = null
            state.dataHomeBanner = []
        },
        getAllBannerSuccess: (state, action) => {
            console.log('action', action)
            state.loading = false
            state.error = null
            state.dataHomeBanner = action.payload
        },
        getAllBannerError: (state, action) => {
            state.loading = false
            state.error = action.payload
            state.dataHomeBanner = []
        },
    },
})

const { actions, reducer } = index
export const { getAllBannerRequest, getAllBannerSuccess, getAllBannerError } =
    actions

export default reducer

export const getAllBanner = () => (dispatch, action) => {
    getDataWithoutToken(
        getAllBannerRequest,
        getAllBannerSuccess,
        getAllBannerError,
        API_URL.banner,
        dispatch
    )
}
