import { useState, useEffect } from 'react'
import JeppesenMockAPIService from '../../shared/api/service/JeppesenMockAPIService'
import { useFetch } from '../../hooks/useFetch'

export const APIView = () => {
	const { data, loading, error } = useFetch(JeppesenMockAPIService.getAllUsers)

	const displayData = () => {
		return (data?.map((element) =>
				<h1>{element.name}</h1>
			)
		)
	}

	return (
		loading
			? <h1>LOADING..</h1>
			: displayData()
	)
}