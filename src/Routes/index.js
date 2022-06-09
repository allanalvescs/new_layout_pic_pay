import { Route, Switch } from "react-router-dom"
import Client from "../Pages/Client"
import HomePage from "../Pages/Home"
import Settings from "../Pages/Settings"

function RoutePage() {
    return (
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/settings" component={Settings} />
            <Route exact path="/client/:id" component={Client} />
        </Switch>
    )
}

export default RoutePage