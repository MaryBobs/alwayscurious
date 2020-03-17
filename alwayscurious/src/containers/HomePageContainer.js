import React, { Component } from 'react';
import BlogContainer from './BlogContainer';
import NavBar from '../components/NavBar';

class HomePageContainer extends Component {
    constructor(props) {
        super(props);
            this.state = {

            }
        }

    
    render() {
        return (
            <div>
            <h1>Mary Cummings</h1>
            <BlogContainer></BlogContainer>
            <NavBar></NavBar>
            </div>
        )
    }
    }



    export default HomePageContainer;

