//dev
import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
//components
import App from './app'
import Home from '../../pages/containers/home'
import Alumnos from '../../alumnos/containers/alumnos'
import Personal from '../../personal/containers/personal'
import Secciones from '../../secciones/containers/secciones'
import Inventario from '../../inventario/containers/inventario'
class Routes extends Component {
    render(){
        return(
        <App>
            <Switch>
                {/* <Route exact path="/about" component={About} /> */}
                <Route exact path="/secciones" component={Secciones} />
                <Route exact path="/alumnos" component={Alumnos} />
                <Route exact path="/personal" component={Personal} />
                {/* <Route exact path="/library" component={Library} /> */}
                {/* <Route exact path="/library/:id" component={Library} /> */}
                <Route exact path="/inventario" component={Inventario} />
                <Route exact path="/" component={Home} />
                {/* <Route component={Page404} /> */}
            </Switch>
        </App>
        )
    }
}
export default Routes;