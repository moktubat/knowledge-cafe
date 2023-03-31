import React from 'react';
import './Bookmark.css';

const Bookmark = ({readTotalTime, count,bookmarks}) => {
  //console.log(readTotalTime)
    return (
        <div className="cart-container">
          <div> 
            <p>Spent time on read: {readTotalTime} min</p>
          </div>
            <p>Bookmarked Blogs : {count}</p>
            <div>
              {
                bookmarks.map((title,index)=><p>{title}</p>)
              }
            </div>
        </div>
    );
};

export default Bookmark;