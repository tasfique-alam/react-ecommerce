import React from "react"
import { Router, Switch } from "react-router-dom"

import browserHistory from "./History"

import RouteWithLayout from "./RouteWithLayout"
import PublicMain from "../layouts/Public/Main"

import Product from "../pages/AllProduct"
import Test from "../pages/Test"


const Routes = () => {

    return (
        <Router history={browserHistory}>
            <Switch>
                <RouteWithLayout
                    component={Product}
                    exact
                    layout={PublicMain}
                    path='/'
                    title='All Product'
                />
                <RouteWithLayout
                    component={Test}
                    exact
                    layout={PublicMain}
                    path='/test'
                    title='Test'
                />
            </Switch>
        </Router>
    )
}


export default Routes
