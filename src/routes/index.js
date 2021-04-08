import React from "react"
import { Router, Switch } from "react-router-dom"

import browserHistory from "./History"

import RouteWithLayout from "./RouteWithLayout"
import PublicMain from "../layouts/Public/Main"

import Product from "../pages/AllProduct"


const Routes = () => {

    return (
        <Router history={browserHistory}>
            <Switch>
                <RouteWithLayout
                    component={Product}
                    exact
                    layout={PublicMain}
                    path='/product'
                    title='All Product'
                />
            </Switch>
        </Router>
    )
}


export default Routes
