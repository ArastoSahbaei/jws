import http from '../JeppesenMockAPI'

const getAllUsers = () => {
	return http.get('/user')
}

export default {
	getAllUsers
}