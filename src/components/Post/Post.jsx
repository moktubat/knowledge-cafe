import React from 'react';
import './Post.css'
const Post = (props) => {

    const {img, blog_title, authorImg, publish_date, author_name} = props.post;
    return (
        <div>
            <div className="post">
                <div className='bannerImg'>
                    <img src={img} alt="" />
                </div>

                <div className='author'>
                    <img src={authorImg} alt="" />
                    <h3>{author_name}</h3>
                    <p>{publish_date}</p>
                </div>

                <h2>{blog_title}</h2>
            </div>
        </div>
    );
};

export default Post;