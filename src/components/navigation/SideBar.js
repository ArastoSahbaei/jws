import styled from 'styled-components'
import logotype from '../../shared/images/logotype.png'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../routes/RoutingPath'
import { UserContext } from '../../shared/provider/UserProvider'
import { useContext } from 'react'

export const SideBar = (props) => {
	const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
	const history = useHistory()
	const { drawerIsOpen, drawerHandler } = props

	const navigate = (route) => {
		history.push(route)
		drawerHandler(false)
	}

	const displaySignOrAuth = () => {
		return !authenticatedUser
			? <Paragraph onClick={() => navigate(RoutingPath.signinView)}>Sign in</Paragraph>
			: <Paragraph>{authenticatedUser}</Paragraph>
	}

	return (
		<Drawer isOpen={drawerIsOpen}>
			<img onClick={() => drawerHandler(false)}
				src={logotype}
				alt={'failed loading'}
				style={{ width: 350, margin: 5 }} />

			<Paragraph onClick={() => navigate(RoutingPath.dashBoardView)}>Dashboard</Paragraph>
			<Paragraph onClick={() => navigate(RoutingPath.fileBrowserView)}>FileBrowser</Paragraph>
			<Paragraph onClick={() => navigate(RoutingPath.apiView)}>API Examples</Paragraph>
			{displaySignOrAuth()}
			<hr />
			<Paragraph>Sign out</Paragraph>
		</Drawer>
	)
}

const Paragraph = styled.p`
font-weight: 600;
font-size: 1.4rem;
cursor: pointer;
transition: 0.3s;
&:hover {
	margin-left: 20px;
	transition: 0.3s;
}
`

const Drawer = styled.nav`
	height: 100%;
	background: white;
	box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
	position: fixed;
	top: 0;
	left: 0;
	width: 70%;
	max-width: 400px;
	z-index: 200;
	transform: translateX(-100%);
	transition: transform 0.3s ease-in-out;
	transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(100)'}
`