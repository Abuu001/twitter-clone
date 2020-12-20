import React from 'react'
import "./Sidebar.css"
import SideBarOption from "../Sidebar/SideBarOption/SideBarOption"
import HomeIcon from '@material-ui/icons/Home';
import TwitterIcon from '@material-ui/icons/Twitter';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import NotificationsActiveOutlinedIcon from '@material-ui/icons/NotificationsActiveOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import Button from '@material-ui/core/Button';



function Sidebar() {
    return (
        <div  className="sideBar">
          <TwitterIcon className="sidebar__tweeterIcon" />
          <  SideBarOption  active text ="Home"  Icon={HomeIcon}/>
          <  SideBarOption  text=" Explore" Icon={SearchOutlinedIcon} />
          <  SideBarOption  text="Notification" Icon ={NotificationsActiveOutlinedIcon}/>
          <  SideBarOption  text=" Messages" Icon={MailOutlineOutlinedIcon}/>
          <  SideBarOption  text=" Bookmarks" Icon={BookmarkBorderOutlinedIcon}/>
          <  SideBarOption  text=" Lists" Icon={ListAltIcon}/>
          <  SideBarOption  text=" Profile" Icon={PermIdentityIcon}/>
          <  SideBarOption  text=" More" Icon={MoreHorizIcon}/>
          <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>
        </div>
    )
}

export default Sidebar
