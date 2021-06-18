import { useState, useEffect } from 'react'
import JeppesenMockAPIService from '../../shared/api/service/JeppesenMockAPIService'
import { useFetch } from '../../hooks/useFetch'

export const APIView = () => {
	const [serverResponse, setServerResponse] = useState()
	const { data, loading, error } = useFetch(JeppesenMockAPIService.getAllUsers)

	const displayData = () => {
		return (
			data?.map((element) =>
				<div>
					<h1>{element.name}</h1>
					<img src={element.avatar} alt={''} />
				</div>
			)
		)
	}

	return (
		loading
			? <h1>LOADING..</h1>
			:
			<div>
				<button onClick={() => console.log(serverResponse)}>Display local state</button>
				{displayData()}
			</div>
	)
}