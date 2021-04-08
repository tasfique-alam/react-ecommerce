import React, { Fragment } from 'react'
import Header from '../Header'
import Footer from '../Footer'

const Main = ({ children }) => {

    return (
        <Fragment>
            <div className="p-5">
                {children}
            </div>
            <Footer />
        </Fragment>
    )
}

export default Main
