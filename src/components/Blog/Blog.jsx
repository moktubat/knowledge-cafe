import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div id='blog'>
            <fieldset>
            <legend><h2>1. Props vs State</h2></legend>
            <p><strong>Props</strong> are immutable. It is read-only components. It's used for passing data from one component to other. With child component it can be accessed. And it is also reusable. <br />
            <strong>State</strong> is mutable. It hold data of component. State can't access with child. And it is can't reusable.
            </p>
            </fieldset>

            <fieldset>
                <legend><h2>2. How does useState work?</h2></legend>
                <p><code>useState</code> is a React Hook, it use for state to a functional component. It return an array with value one current value and other functional update your component.</p>
            </fieldset>

            <fieldset>
                <legend><h2>3. Purpose of useEffect other than fetching data.</h2></legend>
                <p><code>useEffect</code> used for Fetching data, Reading from local storage, Registering and de-registering event listeners. For clean up mount action like removing event listeners or something data fetching we used useEffect component unmounts.</p>
            </fieldset>
            <fieldset>
                <legend><h2>4. How Does React work?</h2></legend>
                <p>
                React is a JavaScript library to use in web development for build a interactive elements websites. But if you’re not familiar with JavaScript or JavaScript libraries, that’s not a helpful for you. React. ReactJS divides the UI into various reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. 
                </p>
            </fieldset>
        </div>
    );
};

export default Blog;