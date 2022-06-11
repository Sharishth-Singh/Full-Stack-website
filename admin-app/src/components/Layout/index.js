import React from "react";
import {Container} from "react-bootstrap";
import Header from '../Header';


const Layout = props => {
    return (
        <>
            <Header />
                {props.children}
        </>
    )
}

export default Layout;
