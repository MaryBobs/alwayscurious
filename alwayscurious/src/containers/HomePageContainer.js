import React, { Component } from 'react';
// import BlogContainer from './BlogContainer';
// import NavBar from '../components/NavBar';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import About from '../components/About';
import Blog from '../components/Blog';
import Projects from '../components/Projects';

class HomePageContainer extends Component {
    constructor(props) {
        super(props);
            this.state = {

            }
        }

    
    render() {
        return (
            <BrowserRouter>
                <div className="HomePage">
                    <Route path="/about" component={About} />
                    <Route path="/blog" component={Blog} />
                    <Route path="/projects" component={Projects} />

            
                    <div className="NavBar">
                    <h2>MARY CUMMINGS</h2>
                    <Link to="/about" className="link">ABOUT</Link>
                    <Link to="/blog" className="link">BLOG</Link>
                    <Link to="/projects" className="link">PROJECTS</Link>
                </div>
            </div>
            </BrowserRouter>
        )
    }
    }



    export default HomePageContainer;

