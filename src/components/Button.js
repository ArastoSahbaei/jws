import { useState } from 'react'

export const Button = ({ name }) => {
	const [companyName, setCompanyName] = useState('Codic')

	return (
		<div>
			<h1 onClick={() => setCompanyName('Jeppesen')}>{companyName}</h1>
			<h1>{name}</h1>
		</div>
	)
}
