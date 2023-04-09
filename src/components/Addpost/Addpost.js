import React from 'react'
import './addPost.css'
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LiveTvIcon from '@mui/icons-material/LiveTv';

export default function Addpost() {
  return (
    <div className='addPost'>
      <div className='addPostContainer'>
        <div className='addPostTop'>
        <img src='/images/profilepic.jpeg' alt='addPostPic' className='addPostPic'/>
            <input placeholder='Whats in your mind?' type='text' className='addPostInput'/>
          
        </div>
        <hr className='postHr'/>
        <div className='addPostBottom'>
          <div className='addPostOptions'>

            <div className='addPostOption'>
            <InsertPhotoIcon htmlColor='Orange' className='addPhoto'/>
            <span className='addPostOptionText'> Add Photo/Video</span>           
            </div>

            <div className='addPostOption'>
            <AddLocationIcon htmlColor='red' className='addPhoto'/>
            <span className='addPostOptionText'> Add Location</span>           
            </div>
            
            <div className='addPostOption'>
            <LocalOfferIcon htmlColor='blue' className='addPhoto'/>
            <span className='addPostOptionText'> Tag</span>           
            </div>

            <div className='addPostOption'>
            <LiveTvIcon htmlColor='tomato' className='addPhoto'/>
            <span className='addPostOptionText'> Go Live</span>           
            </div>
            <button className='postButton'>Post</button>
          </div>
        </div>
      </div>
     
    </div>
  )
}
