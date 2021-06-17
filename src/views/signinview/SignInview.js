import { useContext } from "react"
import { UserContext } from "../../shared/provider/UserProvider"

export const SignInview = () => {
	const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

	return (
		<div>
			<input onChange={event => setAuthenticatedUser(event.target.value)} />
		</div>
	)
}
