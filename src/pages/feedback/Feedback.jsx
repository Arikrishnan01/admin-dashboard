import React from 'react';
import './feedback.css';

export default function Feedback() {
  return (
    <div className='feedback'>
       <h1 className="feedbackTitle">Give your feedback</h1>
        <form className="feedbackForm">
            <label>Username</label>
            <input type="text" />
            <label>Email</label>
            <input type="email" />
            <label>Enter Your feedback</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button className="feedbackSubmit">Send Feedback</button>
        </form>
    </div>
  )
}
