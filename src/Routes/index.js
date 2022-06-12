import { Route, Switch } from "react-router-dom"

import Client from "../Pages/Client"
import CompanyPage from "../Pages/Company"
import HomePage from "../Pages/Home"
import Dash from "../Pages/Dashboard"

function RoutePage() {
    return (
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/dash" component={Dash} />
            <Route exact path="/client/:id" component={Client} />
            <Route exact path="/company" component={CompanyPage} />
        </Switch>
    )
}

export default RoutePage