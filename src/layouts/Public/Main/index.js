import React, { Fragment } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Navbar from '../Navbar'

const Main = ({ children }) => {

    return (
        <Fragment>
            <Navbar/>
            <div className="p-5">
                {children}
            </div>
            <Footer />
        </Fragment>
    )
}

export default Main
