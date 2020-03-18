import React from 'react';
import Beach from "../images/beach.JPG";

function Blog(props) {
    return (
        <div>
            <h2 className="title">Blog</h2>
            <img src={Beach} className="image"/>
            <h5 className="date">Tuesday 17th March</h5>
            <h5 className="sub-title">Happy St Patricks Day!
                What to do when you are an unemployed career changer looking for work
                 during a global pandemic that has closed down half the country!?!</h5>
                 <ul>
                     <li>1. Start a Blog</li>
                     <li>2. Use the above to record your progress as you build on skills</li>
                     <li>3. Share Blog with the world in the hope it helps get you that dream job!</li>
                 </ul>
        </div>
    )
}

export default Blog;