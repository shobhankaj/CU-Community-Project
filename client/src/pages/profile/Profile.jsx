import "./profile.css"
import React from 'react'
import Sidebar from '../../component/sidebar/Sidebar';
import Feed from '../../component/feed/Feed';
import Rightbar from '../../component/rightbar/Rightbar';
import Topbar from "../../component/Topbar/Topbar"
import {useState,useEffect} from 'react'
import axios from "axios";
import {useParams} from "react-router"


function Profile() {
  const PF=process.env.REACT_APP_PUBLIC_FOLDER
  const [user , setUser] = useState({});
  const username = useParams().username;

  useEffect(()=>{
    const fetchUser = async() => {
       const res=await axios.get(`/user?username=${username}`);
       console.log(res.data);
       setUser(res.data)
    };
    fetchUser()
  },[username]);
  return (
    <>
        <Topbar></Topbar>
        <div className="profile">
            <Sidebar />
            <div className="profileRight">
                <div className="profileRightTop">
                  <div className="profileCover">
                  <img className="profileCoverImg" 
                  src={user.coverPicture || PF+"person/noCover.png"} alt="" />
                  <img className="profileUserImg" 
                  src={user.profilePicture ||  PF+"person/noAvatar.png"} alt="" />
                  </div>
                  <div className="profileInfo">
                    <h4 className="profileInfoName">{user.username}</h4>
                    <span className="profileInfoDesc">{user.desc}</span>
                  </div>
                  
                </div>
                <div className="profileRightBottom">
                    <Feed username="Shivam"/>
                    <Rightbar user={user} />
                </div>
            
            </div>
            
      </div>
    </>
  )
}

export default Profile
