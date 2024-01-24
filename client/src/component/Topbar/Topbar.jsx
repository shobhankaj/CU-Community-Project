import React, { useContext } from 'react'
import "./topbar.css"
import {Search,Person,Chat,Notifications} from '@mui/icons-material';
import {Link} from "react-router-dom"
import { AuthContext } from '../../contex/AuthContex';

function Topbar() { 
  const {user} = useContext(AuthContext);
  const PF=process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="topbarContainer">
       <div className="topbarLeft">
          <Link to="/" style={{textDecoration:"none"}}>
            <span className="logo">CU Community</span>
          </Link>
       </div>
       <div className="topbarCenter">
          <div className="searchbar">
            <Search className="searchIcon"/>
            <input type="text" Placeholder="Search for friend , post or video" className="searchInput" />
          </div>
       </div>
       <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconsItem">
            <Person/>
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconsItem">
            <Chat/>
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconsItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <Link to={`/profile/${user.username}`} >
          <img src={user.profilePicture ? PF+user.profilePicture : PF+"person/noAvatar.png" } alt="" className="topbarImg" />
        </Link>
       </div>
    </div>
  )
}

export default Topbar
