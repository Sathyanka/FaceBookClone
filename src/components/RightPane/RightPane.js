import React from 'react'
import "./RightPane.css"

export default function RightPane() {
  return (
    <div className='rightPane'>
      <div className='rightPaneContainer'>
        <div className='addContainer'>
          <span className='sponsered'> Sponsered</span>
          <img src='/images/add.jpg' alt='addPic' className='addImage'/>
        </div>
        <div className='birthdayContainer'>
        <img src='/images/profilepic.jpeg' alt='birthdayPic' className='birthdayImage'/>
        <span className='birthdayText'>
          <b>Prabuudhi Sathyanka</b> and <b>2 others</b> having birthday Today!
        </span>
        </div>
        <div className='friendList'>
          <li className='onlineFriend'>
            <div className='onlineFriendcontainer'>

            <img src='/images/profilepic.jpeg' alt='birthdayPic' className='OnlineFrienImage'/>
            <span className='onlineStatus'></span>

            </div>
            <span className='OnlineFriendName'>Tharushi Wijesekara</span>
          </li>
          <li className='onlineFriend'>
            <div className='onlineFriendcontainer'>

            <img src='/images/profilepic.jpeg' alt='birthdayPic' className='OnlineFrienImage'/>
            <span className='onlineStatus'></span>

            </div>
            <span className='OnlineFriendName'>Tharushi Wijesekara</span>
          </li>
          <li className='onlineFriend'>
            <div className='onlineFriendcontainer'>

            <img src='/images/profilepic.jpeg' alt='birthdayPic' className='OnlineFrienImage'/>
            <span className='onlineStatus'></span>

            </div>
            <span className='OnlineFriendName'>Tharushi Wijesekara</span>
          </li>
          <li className='onlineFriend'>
            <div className='onlineFriendcontainer'>

            <img src='/images/profilepic.jpeg' alt='birthdayPic' className='OnlineFrienImage'/>
            <span className='onlineStatus'></span>

            </div>
            <span className='OnlineFriendName'>Tharushi Wijesekara</span>
          </li>
          <li className='onlineFriend'>
            <div className='onlineFriendcontainer'>

            <img src='/images/profilepic.jpeg' alt='birthdayPic' className='OnlineFrienImage'/>
            <span className='onlineStatus'></span>

            </div>
            <span className='OnlineFriendName'>Tharushi Wijesekara</span>
          </li>
          <li className='onlineFriend'>
            <div className='onlineFriendcontainer'>

            <img src='/images/profilepic.jpeg' alt='birthdayPic' className='OnlineFrienImage'/>
            <span className='onlineStatus'></span>

            </div>
            <span className='OnlineFriendName'>Tharushi Wijesekara</span>
          </li>
        </div>
      </div>

      
    </div>
  )
}
