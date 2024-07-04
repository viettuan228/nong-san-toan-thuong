const BASE_URL = process.env.REACT_APP_BASE_URL_BE
console.log(BASE_URL)
export const API_URL = {
    banner: `${BASE_URL}/banner/get-all`,
}
