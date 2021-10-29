import { Route, Switch } from 'react-router-dom'
import Dashboard from '../Pages/Dashboard'
import Login from '../Pages/Login'

export default function Routes(){
    
    return(

            <Switch>
                <Route exact path="/">
                    <Login />
                </Route>
                <Route exact path="/dashboard">
                    <Dashboard />
                </Route>
            </Switch>

    )
}