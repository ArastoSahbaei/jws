import { useContext } from "react"
import RoutingPath from "../../routes/RoutingPath"
import { UserContext } from "../../shared/provider/UserProvider"
import { useHistory } from 'react-router-dom'

export const SignInview = () => {
	const history = useHistory()
	const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

	const signIn = (event) => {
		event.preventDefault()
		localStorage.setItem('user', authenticatedUser)
		history.push(RoutingPath.fileBrowserView)
	}

	return (
		<div>
			<form>
				<input onChange={event => setAuthenticatedUser(event.target.value)} />
				<button onClick={(event) => signIn(event)}>Sign in</button>
			</form>
		</div>
	)
}
