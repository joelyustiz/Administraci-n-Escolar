//dev
import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
//components
import App from '../app/containers/app'
import Home from '../pages/containers/home'
import Secciones from '../pages/containers/secciones'
class Routes extends Component {
    render(){
        return(
        <App>
            <Switch>
                {/* <Route exact path="/about" component={About} /> */}
                <Route exact path="/secciones" component={Secciones} />
                {/* <Route exact path="/library" component={Library} /> */}
                {/* <Route exact path="/library/:id" component={Library} /> */}
                <Route exact path="/" component={Home} />
                {/* <Route component={Page404} /> */}
            </Switch>
        </App>
        )
    }
}
export default Routes;