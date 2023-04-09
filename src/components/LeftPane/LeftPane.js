import React from 'react'
import './leftPane.css'
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import GroupIcon from '@mui/icons-material/Group';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import FlagIcon from '@mui/icons-material/Flag';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BuildIcon from '@mui/icons-material/Build';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';



export default function LeftPane() {
  return (
    <div className='leftPane'>
      <div className='leftPaneContainer'>
        <div className='leftPainMenue'>
            <li className='leftPainMenueItem'>
                <MarkUnreadChatAltIcon className='leftPeneMenuIcon'/>
                <span className='leftPaneMenueText'>Messages</span>
            </li>
           
            <li className='leftPainMenueItem'>
                <GroupIcon className='leftPeneMenuIcon'/>
                <span className='leftPaneMenueText'>Groups</span>
            </li>

            <li className='leftPainMenueItem'>
                <RssFeedIcon className='leftPeneMenuIcon'/>
                <span className='leftPaneMenueText'>Feed</span>
            </li>

            <li className='leftPainMenueItem'>
                 <FlagIcon className='leftPeneMenuIcon'/>
                 <span className='leftPaneMenueText'>Pages</span>
            </li>

            <li className='leftPainMenueItem'>           
                <CalendarMonthIcon className='leftPeneMenuIcon'/>
                <span className='leftPaneMenueText'>Ivents</span>
            </li>
            <li className='leftPainMenueItem'>
                <BuildIcon className='leftPeneMenuIcon'/>
                <span className='leftPaneMenueText'>Settings</span>
            </li>
            <li className='leftPainMenueItem'>
                <SportsEsportsIcon className='leftPeneMenuIcon'/>
                <span className='leftPaneMenueText'>Games</span>
            </li>
            <li className='leftPainMenueItem'>
                <NewspaperIcon className='leftPeneMenuIcon'/>
                <span className='leftPaneMenueText'>News</span>
            </li>

            <li className='leftPainMenueItem'>
                <WorkOutlineIcon className='leftPeneMenuIcon'/>
                <span className='leftPaneMenueText'>Jobs</span>
            </li>
            <li className='leftPainMenueItem'>
                <AddShoppingCartIcon className='leftPeneMenuIcon'/>
                <span className='leftPaneMenueText'>Market</span>
            </li>
        </div>
        <hr/>

        <div className='pagesYouLiked'>
            <h3>Pages You Liked</h3>

            <li className='pageListItems'>
            <img src='/images/profilepic.jpeg' alt='proPic' className='pagePic'/>
            <span className='pageName'>Page</span>
            </li>

            <li className='pageListItems'>
            <img src='/images/profilepic.jpeg' alt='proPic' className='pagePic'/>
            <span className='pageName'>Page</span>
            </li>

            <li className='pageListItems'>
            <img src='/images/profilepic.jpeg' alt='proPic' className='pagePic'/>
            <span className='pageName'>Page</span>
            </li>
            
            <li className='pageListItems'>
            <img src='/images/profilepic.jpeg' alt='proPic' className='pagePic'/>
            <span className='pageName'>Page</span>
            </li>

        </div>
      </div>
    </div>
  )
}

