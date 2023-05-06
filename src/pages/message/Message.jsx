import React from 'react';
import './message.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import MoodIcon from '@mui/icons-material/Mood';

export default function Message() {
  return (
    <div className='message'>
      <div className="messageContainer">
        <div className="messageHead">
            <img 
                src="https://thumbs.dreamstime.com/b/profile-picture-smiling-millennial-indian-businesswoman-hold-use-modern-tablet-gadget-office-headshot-portrait-happy-198022337.jpg"
                alt="" 
                className="messageImg" 
            />
                <span className="messageUser">Jhon Smit</span>
                <span className="messageOnline">Online</span>
                <span className="messageSetting">
                <MoreVertIcon />
            </span>
        </div>
        <div className="messageBody">
            <span className="messageLeft">Hii</span>
            <span className="messageRight">Hii </span>
            <span className="messageLeft">Good morning</span>
            <span className="messageRight">How are yu?</span>
            <span className="messageLeft">Fine</span>
            <span className="messageRight">you</span>
        </div>
        <div className="messageKeyboard">
            <div className="messageInput">
                <MoodIcon/>
                <label >Message</label>
                <span >
                    <AttachFileIcon className='messageIcon1'/>
                    <PhotoCameraIcon className='messageIcon2'/>
                    <KeyboardVoiceIcon className='messageIcon3'/>
                </span>
            </div>
            <img 
                src="https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/feb89e12e6fcb28e46aca345701fb261.png" 
                alt="" 
                className="messageKeyImg" 
            />
        </div>
      </div>
    </div>
  )
}
