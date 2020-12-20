import React ,{useState,useEffect}from 'react'
import "./Feed.css"
import TweetBox from "./TweetBox/TweetBox"
import Posts from "./Posts/Posts"
import Kid from "../../components/assets/kid.jpeg"
import Laugh from "../assets/laugh.gif"
import db from "../firebase"

function Feed() {
    const [posts,setPosts] =useState([])

    useEffect(()=>{
        db.collection('posts').onSnapshot(snapshot=>{
            setPosts(snapshot.docs.map(doc=>doc.data()))
        })
    },[])
    return (
        <div className="feed">
            <div className="feed__header">
                <h2>Home</h2>
            </div>
            <TweetBox />
            
            <Posts
                displayName="Abraham Lugonzo"
                username="Abuu001"
                verified={true}
                text="Good Morning  👋👋👋"
                avatar={Kid        }
                image={Laugh}
                />
                {posts.map(post=>(
                       <Posts
                       displayName={post.displayName}
                       username={post.username}
                       verified={post.verified}
                       text={post.text}
                       avatar={post.avatar }
                       image={post.image}
                    />
                ))}
            <Posts
                displayName="Michael"
                username="Mik32"
                verified={false}
                text="baked"
                avatar={Kid}
                image={Kid}
             />
            <Posts />
            <Posts />
        </div>
    )
}

export default Feed
