import React from 'react';
import './email.css';

export default function Email() {
  return (
    <div className='email'>
        <h1 className="emailTitle">Reach to Me</h1>
      <div className="emailContainer">
        <img src="https://thumbs.dreamstime.com/z/profile-picture-caucasian-male-employee-posing-office-happy-young-worker-look-camera-workplace-headshot-portrait-smiling-190186649.jpg" 
            alt="profile" 
            className="emailImg" 
        />
        <div className="emailUserTitle">
            <span className="emailUsername">Jack</span>
            <span className="emailRole">Data Scientist</span>
        </div>
      </div>
      <form className="emailForm">
        <h3 className="labelTitle">Customer Details</h3>
        <label>First Name</label>
        <input type="text" placeholder='Enter your firstname'/>
        <label >Last Name</label>
        <input type="text" placeholder='Enter your lastname'/>
        <label >Email</label>
        <input type="email" placeholder='Enter your email'/>
        <label >Password</label>
        <input type="password" placeholder='Enter your password'/>
        <label >Phone</label>
        <input type="text" placeholder='Enter your phone'/>
        <button className="submitButton">Send Email</button>
      </form>
    </div>
  )
}
