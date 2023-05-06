import React from 'react';
import './user.css';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import PublishIcon from '@mui/icons-material/Publish';
import { Link } from 'react-router-dom';

export default function User() {
  return (
    <div className='user'>
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
            <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
            <div className="userShow">
                <div className="userShowTop">
                    <img 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn6la0dOXP7G7oy6b1-xmmmZSTvY2y612sYg&usqp=CAU" 
                        alt="profile" 
                        className="userShowImg"
                    />
                    <div className="userShowTopTitle">
                        <span className="userShowUsername">Anna Becker</span>
                        <span className="userShowTitle">Software Engineer</span>
                    </div>
                </div>
                <div className="userShowBottom">
                    <span className="userShowTitle">Account Details</span>
                    <div className="userShowInfo">
                        <PermIdentityIcon className='userShowIcon'/>
                        <span className="userShowInfoTitle">annabeck99</span>
                    </div>
                    <div className="userShowInfo">
                        <CalendarTodayIcon className='userShowIcon'/>
                        <span className="userShowInfoTitle">10.90.1999</span>
                    </div>
                    <span className="userShowTitle">Contact Details</span>
                    <div className="userShowInfo">
                        <PhoneAndroidIcon className='userShowIcon'/>
                        <span className="userShowInfoTitle">+1 90 987 009</span>
                    </div>
                    <div className="userShowInfo">
                        <MailOutlineIcon className='userShowIcon'/>
                        <span className="userShowInfoTitle">annabeck99@gmail.com</span>
                    </div>
                    <div className="userShowInfo">
                        <LocationSearchingIcon className='userShowIcon'/>
                        <span className="userShowInfoTitle">Newyork | USA</span>
                    </div>
                </div>
            </div>
            <div className="userUpdate">
                <span className="userUpdateTitle">Edit</span>
                <form action="" className="userUpdateForm">
                    <div className="userUpdateLeft">
                        <div className="userUpdateItem">
                            <label>Username</label>
                            <input 
                                type="text" 
                                placeholder='annabeck99'
                                className='userUpdateInput'
                            />
                        </div>
                        <div className="userUpdateItem">
                            <label>Full Nname</label>
                            <input 
                                type="text" 
                                placeholder='Anna Becker'
                                className='userUpdateInput'
                            />
                        </div>
                        <div className="userUpdateItem">
                            <label>Email</label>
                            <input 
                                type="text" 
                                placeholder='annabeck99@gmail.com'
                                className='userUpdateInput'
                            />
                        </div>
                        <div className="userUpdateItem">
                            <label>Phone</label>
                            <input 
                                type="text" 
                                placeholder='+1 90 987 009'
                                className='userUpdateInput'
                            />
                        </div>
                        <div className="userUpdateItem">
                            <label>Address</label>
                            <input 
                                type="text" 
                                placeholder='Newyork | USA'
                                className='userUpdateInput'
                            />
                        </div>
                    </div>
                    <div className="userUpdateRight">
                        <div className="userUpdateUpload">
                            <img 
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn6la0dOXP7G7oy6b1-xmmmZSTvY2y612sYg&usqp=CAU" 
                                alt="" 
                                className="userUpdateImg" 
                            />
                            <label htmlFor="file">
                                 <PublishIcon className='userUpdateIcon'/> 
                            </label>
                            <input type="file" id='file' style={{ display:"none"}}/>
                        </div>
                        <button className="userUpdateButton">Update</button>
                    </div>
                </form>
            </div>
      </div>
    </div>
  )
}
