import React, { Component } from 'react';
// import BlogContainer from './BlogContainer';
import NavBar from '../components/NavBar';
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
            <div>
            <h2>MARY CUMMINGS</h2>
               <NavBar></NavBar>
               </div>
        )
    }
    }



    export default HomePageContainer;

