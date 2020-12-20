import { Button } from '@material-ui/core'
import React,{useState,useEffect} from 'react'
import "./TweetBox.css"
import Avatar from '@material-ui/core/Avatar';
import Kid from "../../assets/kid.jpeg"
import db from "../../firebase"
import girl from "../../assets/girl.jpeg"

function TweetBox() {
  const [tweetMessage,setTweetMessage]=useState('')
  const [tweetImage,setTweetImage]=useState('')

   const sendTweet=(e)=>{
      e.preventDefault();
      db.collection('posts').add({
        displayName : 'Marth Keira',
        username : 'Km467',
        verified : true,
        text: tweetMessage,
        image: tweetImage,
        avatar : girl
      })
      setTweetMessage("")
      setTweetImage("")
    }
    return (
        <div className="tweetbox">
          <form>
              <div  className="tweetbox__input">
                <Avatar src={Kid} alt="Photo"  />
                <input value={tweetMessage}  onChange={e=>setTweetMessage(e.target.value)}placeholder="Whats happening !!" type="text" />
                <input  value={tweetImage}  onChange={e=>setTweetImage(e.target.value)}  placeholder="Enter image URL" type="text" />
              </div>
                <Button  onClick={sendTweet} type="submit" className="tweetbox__Button">Tweet</Button>
          </form>
        </div>
    )
}

export default TweetBox
