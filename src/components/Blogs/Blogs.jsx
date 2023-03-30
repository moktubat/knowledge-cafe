import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';
import './Blogs.css';

const Blogs = () => {
    const [posts ,setPosts] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setPosts(data))
    },[])
    return (
        <div className="blogs-container">
            <div className="blogs-post">
                {
                    posts.map(post => <Post
                    key={post.id}
                    post={post}
                    ></Post>)
                }
            </div>

            <div className="blogs-bookmark">
                <h4>Bookmark List</h4>
            </div>
        </div>
    );
};

export default Blogs;