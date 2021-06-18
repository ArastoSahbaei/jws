import { useEffect, useState } from 'react'

export const Home = () => {
	const [value, setValue] = useState(0)

	useEffect(() => {
		alert('hey')
		return (() => {
			alert('bye')
		})
	}, [value])

	return (
		<div>
			<h1>This is home</h1>
			<h1 onClick={() => setValue(value + 1)}>{value}</h1>
		</div>
	)
}
