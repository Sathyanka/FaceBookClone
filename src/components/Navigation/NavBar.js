import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';
import "./navBar.css"

export default function NavBar() {
  return (
    <div className="navBarBox">

      <div className="navBarLeft">
        <span className='logo'>FackeBook</span>
      </div>

      <div className='navBarCenter'>
        <div className='searchBarBox'>
          <SearchIcon className='searchIcon'/>
          <input placeholder='Search for your friend' className='searchInput'/>
        </div>
      </div>

      <div className='navBarRight'>
        
        <div className='navBarLinks'>
          <span className='navBarLink'>Home Page</span>
          <span className='navBarLink'>Profile</span>
        </div>

        <div className='navBarIcons'>

          <div className='navBarIcon'></div>
          <PersonIcon/>
            <span className='iconTag'>2</span>
          <MessageIcon/>
            <span className='iconTag'>2</span>
            <SettingsIcon/>
            <span className='iconTag'>2</span>
        </div>

        <div className='pic'>
          <img src='/images/profilepic.jpeg' alt='proPic' className='profilePicture'/>
        </div> 
        
      </div>

    </div>
  )
}