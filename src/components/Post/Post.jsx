import React from 'react';
import './Post.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Post = (props) => {

    const {img, blog_title, author_img, publish_date, author_name, read_time, tag} = props.post;
    const handleAddToBookmark = props.handleAddToBookmark;
    const handleReadTime = props.handleReadTime;

    return (
        <div>
            <div className="post">
                <div className="bannerImg">
                    <img src={img} alt="" />
                </div>

                <div className="author-container">
                    <div className="author-info">
                        <img src={author_img} alt="author_img" />
                        <div>
                        <h4>{author_name}</h4>
                        <p>{publish_date}</p>
                        </div>
                    </div>

                    <div className="time">
                        <p>{read_time} min read <button onClick={()=>handleAddToBookmark(blog_title)}>{<FontAwesomeIcon icon={faBookmark} />}</button></p>
                        <ToastContainer />
                    </div>
                </div>
                <h1>{blog_title}</h1>
                <p>{tag}</p>
                <button className="btn-read" onClick={() => handleReadTime(read_time)}><strong>Mark as read</strong></button>
                
            </div>
        </div>
    );
};

export default Post;