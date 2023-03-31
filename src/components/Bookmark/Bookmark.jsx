import React from 'react';
import './Bookmark.css';

const Bookmark = ({readTotalTime, count,bookmarks}) => {
  //console.log(readTotalTime)
    return (
        <div className="cart-container">
          <div className='time-container'> 
            <p>Spent time on read: {readTotalTime} min</p>
          </div>
            <div className="added-bookmark">
            <p>Bookmarked Blogs : {count}</p>
            <div>
              {
                bookmarks.map((title,index)=><p>{title}</p>)
              }
            </div>
            </div>
        </div>
    );
};

export default Bookmark;