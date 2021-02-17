import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,

} from "react-router-dom";
import Cart from './Cart';
import Home from './Home';
import Signup from './Signup';
import Product from './Product'
import Register from './Register';

function Navbar() {
    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/product">Products</Link>
                    </li>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                    <li>
                        <Link to="/cart">Cart</Link>
                    </li>
                    <li>
                        <Link to="/Signup">Signup</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route path="/product">
                    <Product />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/cart">
                    <Cart />
                    </Route>

                    <Route path="/Signup">
                        <Signup />
                    </Route>
                    <Route path="/">
                       <Home />
                 </Route>
            </Switch>
        </Router >

    )
}

export default Navbar
