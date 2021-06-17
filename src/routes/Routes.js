import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Dashboard } from '../views/dashboardview/Dashboard'
import { FileBrowser } from '../views/filebrowserview/FileBrowser'
import { Home } from '../views/homeview/Home'
import { SignInview } from "../views/signinview/SignInview"
import AdminRoutingPath from "./AdminRoutingPath"
import RoutingPath from "./RoutingPath"

export const Routes = ({ children }) => {
	return (
		<BrowserRouter>
			{children}
			<Switch>
				<Route exact path={AdminRoutingPath.dashBoardView} component={Dashboard} />
				<Route exact path={RoutingPath.fileBrowserView} component={FileBrowser} />
				<Route exact path={RoutingPath.signinView} component={SignInview} />
				<Route component={Home} />
			</Switch>
		</BrowserRouter>
	)
}
