import './topbar.css';
import {NotificationsNone , Language ,Settings} from '@mui/icons-material';
import profilePhoto from './../../images/profileimg.avif';
const Topbar = () => {
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo">AdminDash</span>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                    <NotificationsNone/>
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <Language/>
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <Settings/>   
                </div>
                <img src={profilePhoto} alt="profile" className="topAvatar" />
            </div>
        </div>
    </div>
  )
}

export default Topbar