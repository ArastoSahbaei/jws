import Axios from 'axios'

const mockURL = 'https://60ba330980400f00177b7d6a.mockapi.io/api/v1/'
const developmentURL = ''
const produtctionURL = ''

const JeppesenMockAPI = Axios.create({
	baseURL: produtctionURL,
	headers: { 'Content-Type': 'application/json' }
})

/* 
JeppesenMockAPI.interceptors.request.use(function (config) {
	const token = localStorage.getItem('token')
	config.headers.Authorization = token ? `Bearer ${token}` : ''
	return config
})
 */
export default JeppesenMockAPI