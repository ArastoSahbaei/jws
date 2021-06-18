import { useState, useEffect } from "react"

export const useFetch = (APICall) => {
	const [data, setData] = useState([])
	const [loading, setLoading] = useState()
	const [error, setError] = useState()

	const retrieveData = async () => {
		try {
			const { data } = await APICall()
			data && setData(data)
			setLoading(false)
		} catch (error) {
			setError(error)
			setLoading(false)
		}
	}

	useEffect(() => {
		setLoading(true)
		retrieveData()
	}, [])

	return { data, loading, error }

}