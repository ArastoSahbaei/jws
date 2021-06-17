import styled from 'styled-components'
import logotype from '../../shared/images/logotype.png'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../routes/RoutingPath'

export const SideBar = (props) => {
	const history = useHistory()
	const { drawerIsOpen, drawerHandler } = props

	const navigate = (route) => {
		history.push(route)
		drawerHandler(false)
	}

	return (
		<Drawer isOpen={drawerIsOpen}>
			<img onClick={() => drawerHandler(false)}
				src={logotype}
				alt={'failed loading'}
				style={{ width: 350, margin: 5 }} />

			<p onClick={() => navigate(RoutingPath.dashBoardView)}>Dashboard</p>
			<p onClick={() => navigate(RoutingPath.fileBrowserView)}>FileBrowser</p>
			<p onClick={() => navigate(RoutingPath.signinView)}>Sign in</p>
		</Drawer>
	)
}

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