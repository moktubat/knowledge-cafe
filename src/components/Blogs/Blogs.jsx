import React, { useEffect, useState } from 'react';
import Bookmark from '../Bookmark/Bookmark';
import Post from '../Post/Post';
import './Blogs.css';

const Blogs = () => {
    const [posts ,setPosts] = useState([]);
    const [bookmarks, setBookmarks] = useState([])
    const [readTotalTime,setReadTotalTime]= useState(0);
    const [count, setCount]= useState(0)
    
    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setPosts(data))
    },[])

    const handleReadTime = (time)=>{
        let newTotalTime = readTotalTime + time;
        setReadTotalTime(newTotalTime);
    }

    const handleAddToBookmark = (post) => {
        setCount(count+1);
        const newBookmarks = [...bookmarks, post];
        setBookmarks(newBookmarks);

    }

    return (
        <div className="blogs-container">
            <div className="blogs-post">
                {
                    posts.map(post => <Post
                    key={post.id}
                    post={post}
                    handleReadTime={handleReadTime}
                    handleAddToBookmark={handleAddToBookmark}
                    ></Post>)
                }
            </div>

            <div className="blogs-bookmark">
                <Bookmark
                bookmarks={bookmarks}
                readTotalTime ={readTotalTime}
                count ={count}
                ></Bookmark>
            </div>
        </div>
    );
};

export default Blogs;