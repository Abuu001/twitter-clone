import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Posts.css"
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import PublishIcon from '@material-ui/icons/Publish';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

function Posts({displayName,username,verified,text,image,avatar}) {
    return (
        <div className="post">
            <div  className="post__avatar">
                <Avatar  src={avatar} alt="profile"/>
            </div>
            <div  className="post__body">
                <div  className="post__header">
                    <div  className="post__header__text">
                       <h2>{displayName}{"  "} {verified && <VerifiedUserIcon  className="post__badge"/> } <span className="post__headerSpecial"> @{username}</span></h2>
                  </div>
                  <div  className="post__header__description">
                        <p>{text}</p>
                  </div>
                </div>
                <img src={image}  alt="post" />
                <div  className="post__footer">
                        <ChatBubbleOutlineIcon fontSize="small" />
                        <RepeatIcon  fontSize="small" />
                        <FavoriteBorderIcon fontSize="small"  />
                        <PublishIcon  fontSize="small" />
                </div>
            </div>
        </div>
    )
}
///1.52
export default Posts
