import React from "react"
import { Router, Switch } from "react-router-dom"

import browserHistory from "./History"

import RouteWithLayout from "./RouteWithLayout"
import Main from "../layouts/Public/Main"

import Product from "../pages/AllProduct"
import Test from "../pages/Test"

import SurfersCO from '../pages/SurfersCO'


const Routes = () => {

    return (
        <Router history={browserHistory}>
            <Switch>
                <RouteWithLayout
                    component={Product}
                    exact
                    layout={Main}
                    path='/'
                    title='All Product'
                />
                <RouteWithLayout
                    component={Test}
                    exact
                    layout={Main}
                    path='/test'
                    title='Test'
                />
                <RouteWithLayout
                    component={SurfersCO}
                    exact
                    layout={Main}
                    path='/surfers'
                    title='Surfers CO'
                />
            </Switch>
        </Router>
    )
}


export default Routes
