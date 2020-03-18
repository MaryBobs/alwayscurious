import React, {Component} from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import About from './About';
import Blog from './Blog';
import Projects from './Projects';
import Beach from "../images/beach.JPG";
import Shore from "../images/shore.JPG";
import Duck from "../images/duck.png";

class NavBar extends Component {



render() {
    return (
        <BrowserRouter>
            <div>
                <div className="NavBar">
                    <div className="nav-block">
                <Link to="/about" className="link"><img src={Duck} className="nav-image"/>ABOUT</Link>
                <Link to="/blog" className="link"><img src={Beach} className="nav-image"/>BLOG</Link>
                <Link to="/contact" className="link"><img src={Shore} className="nav-image"/>PROJECTS</Link>
                </div>

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