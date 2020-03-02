import React, { Component } from 'react';
import BlogContainer from './BlogContainer';

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
            </div>
        )
    }
    }



    export default HomePageContainer;

