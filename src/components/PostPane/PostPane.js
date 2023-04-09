import React from 'react'
import "./postPane.css"
import Addpost from '../Addpost/Addpost.js'
import Posts from '../FbPosts/Posts'




export default function PostPane() {
  return (
    <div className='postPane'>
      <Addpost/>
     <Posts/>
     <Posts/>
     <Posts/>
    </div>
    
  )
}
