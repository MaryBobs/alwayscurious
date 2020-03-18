import React, {Component} from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import About from './About';
import Blog from './Blog';
import Projects from './Projects';

class NavBar extends Component {



render() {
    return (
        <BrowserRouter>
            <div>
                <div className="NavBar">
                <Link to="/about" className="link">ABOUT</Link>
                <Link to="/blog" className="link">BLOG</Link>
                <Link to="/contact" className="link">PROJECTS</Link>

                <Route exact path="/"></Route>
                
                <Route path="/about" component={About} />
                <Route path="/blog" component={Blog} />
                <Route path="/contact" component={Projects} />
            </div>
        </div>
        </BrowserRouter>
    )
}
}

export default NavBar;