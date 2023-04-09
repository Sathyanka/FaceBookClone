import React from 'react'
import './post.css'
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

export default function Posts() {
  return (
<div className='post'>
        <div className='postContainer'>
            <div className='postTop'> 
            <img src='/images/profilepic.jpeg' alt='addPostPic' className='postImage'/>
            <span className='postUserName'>Prabuddhi Sathyanka</span>
            <span className='postTime'>5 mins ago </span>
            </div>
            <div className='postCenter'>
              <div className='postCaption'>Hello Sri Lanka.....!</div>
              <img src='/images/profilepic.jpeg' alt='proPic' className='postedImage'/>
            </div>
            <div className='postBottom'>
              <div className='postBottomLeft' >
                <InsertEmoticonIcon htmlColor='tomato' className='postReact'/>
                <FavoriteIcon htmlColor='pink' className='postReact'/>
                <ThumbUpIcon htmlColor='blue' className='postReact'/>
                <span className='likeCount'>Sathyanka and 225 others </span>
              </div>
              <div className='postRight'>
                <div className='commentCount'>
                  12 comments

                </div>

              </div>


            </div>
        </div>
      
    </div>
  )
}
