import { useContext, useEffect } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { UserContext } from "../shared/provider/UserProvider"
import { APIView } from "../views/apiview/APIView"
import { Dashboard } from '../views/dashboardview/Dashboard'
import { FileBrowser } from '../views/filebrowserview/FileBrowser'
import { Home } from '../views/homeview/Home'
import { SignInview } from "../views/signinview/SignInview"
import AdminRoutingPath from "./AdminRoutingPath"
import RoutingPath from "./RoutingPath"

export const Routes = ({ children }) => {
	const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

	const blockRouteIfAuthenticated = (navigateToViewIfAuthenticated) => {
		return authenticatedUser ? Home : navigateToViewIfAuthenticated
	}

	useEffect(() => {
		setAuthenticatedUser(localStorage.getItem('user'))
	}, [])

	return (
		<BrowserRouter>
			{children}
			<Switch>
				<Route exact path={AdminRoutingPath.dashBoardView} component={Dashboard} />
				<Route exact path={RoutingPath.fileBrowserView} component={FileBrowser} />
				<Route exact path={RoutingPath.signinView} component={blockRouteIfAuthenticated(SignInview)} />
				<Route exact path={RoutingPath.apiView} component={APIView} />
				<Route component={Home} />
			</Switch>
		</BrowserRouter>
	)
}
