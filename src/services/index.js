import axios from 'axios'

export const getDataWithoutToken = (
    request,
    success,
    failure,
    url,
    dispatch
) => {
    dispatch(request())
    try {
        axios.get(url).then((res) => {
            console.log('res', res)
            if (res.status === 200) {
                dispatch(success(res.data))
            } else {
                dispatch(failure(res.data.message))
            }
        })
    } catch (err) {
        dispatch(failure(err))
    }
}
