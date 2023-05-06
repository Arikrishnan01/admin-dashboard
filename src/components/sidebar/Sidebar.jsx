import React from 'react';
import './sidebar.css';
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AssessmentIcon from '@mui/icons-material/Assessment';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DynamicFeedOutlinedIcon from '@mui/icons-material/DynamicFeedOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
              <ul className="sidebarList">
                <Link to='/' className="link">
                <li className="sidebarListItem active">
                    <LineStyleIcon className='sidebarIcon'/>
                    Home
                </li>
                </Link>
                <Link to="/analytics" className="link">
                <li className="sidebarListItem">
                    <TimelineIcon className='sidebarIcon'/>
                    Analicts
                </li>
                </Link>
                <Link to="/sales" className="link">
                <li className="sidebarListItem">
                    <TrendingUpIcon className='sidebarIcon'/>
                    Sales
                </li>
                </Link>
              </ul>
          </div>
        </div>

        <div className="sidebarWrapper">
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Quick Menu</h3>
              <ul className="sidebarList">
                <Link to='/users' className="link">
                  <li className="sidebarListItem active">
                      <PersonOutlineIcon className='sidebarIcon'/>
                      Users
                  </li>
                </Link>
                <Link to='/products' className="link">
                  <li className="sidebarListItem">
                      <StorefrontIcon className='sidebarIcon'/>
                      Products
                  </li>
                </Link>
                <Link to='/transactions' className="link">
                <li className="sidebarListItem">
                    <AttachMoneyIcon className='sidebarIcon'/>
                    Transactions
                </li>
                </Link>
                <li className="sidebarListItem">
                    <AssessmentIcon className='sidebarIcon'/>
                    Report
                </li>
              </ul>
          </div>
        </div>

        <div className="sidebarWrapper">
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Notifications</h3>
              <ul className="sidebarList">
              <Link to='/email' className="link">
                <li className="sidebarListItem active">
                    <MailOutlineIcon className='sidebarIcon'/>
                    Mail
                </li>
                </Link>
                <Link to='/feedback' className="link">
                <li className="sidebarListItem">
                    <DynamicFeedOutlinedIcon className='sidebarIcon'/>
                    Feedback
                </li>
                </Link>
                <Link to='/message' className="link">
                <li className="sidebarListItem">
                    <ChatBubbleOutlineOutlinedIcon className='sidebarIcon'/>
                    Message
                </li>
                </Link>
              </ul>
          </div>
        </div>
    </div>
  )
}
