import { CalendarToday, EmailOutlined, LocationCityOutlined, PermIdentity, PhoneAndroid, Publish } from '@mui/icons-material'
import './user.css'
import { Link } from 'react-router-dom'

const User = () => {
    return (
        <div className='user'>
            <div className="userTitleContainer">
                <h1 className="userTitle">
                    Edit User
                </h1>
                <Link to='/newUser'>
                <button className="userButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="https://images.pexels.com/photos/18015188/pexels-photo-18015188/free-photo-of-a-man-with-a-hat-and-gloves-holding-a-camera.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" className="userShowImg" />
                        <div className="userShowTopTitle">
                            <span className="userShowTopUsername">Anna beck</span>
                            <span className="userShowTopJobTitle">Software Engineer</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle"> Account Details</span>
                        <div className="userShowInfo">
                        <PermIdentity className='userShowIcon'/>
                        <span className="userShowInfoTitle">annabeck99</span>
                        </div>
                        <div className="userShowInfo">
                        <CalendarToday className='userShowIcon'/>
                        <span className="userShowInfoTitle">10.12.1990</span>
                        </div>
                        <span className="userShowTitle"> Contact Details</span>
                        <div className="userShowInfo">
                        <PhoneAndroid className='userShowIcon'/>
                        <span className="userShowInfoTitle">+91 999 556 6210</span>
                        </div>
                        <div className="userShowInfo">
                        <EmailOutlined className='userShowIcon'/>
                        <span className="userShowInfoTitle">annabeck@gmail.com</span>
                        </div>
                        <div className="userShowInfo">
                        <LocationCityOutlined className='userShowIcon'/>
                        <span className="userShowInfoTitle">New York , usa</span>
                        </div>
                        
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateFormLeft">
                            <div className="userUpdateItem">
                                <label >Username</label>
                                <input type="text" className='userUpdateInput' placeholder='annabeck99' />
                            </div>
                            <div className="userUpdateItem">
                                <label >Full Name</label>
                                <input type="text" className='userUpdateInput' placeholder='Anna Beck' />
                            </div>
                            <div className="userUpdateItem">
                                <label >Email</label>
                                <input type="text" className='userUpdateInput' placeholder='annabeck@gmail.com' />
                            </div>
                            <div className="userUpdateItem">
                                <label >Phone</label>
                                <input type="number" className='userUpdateInput' placeholder='+91 999 556 6210
' />
                            </div>
                            <div className="userUpdateItem">
                                <label >Address</label>
                                <input type="text" className='userUpdateInput' placeholder='New York , usa' />
                            </div>
                        </div>
                        <div className="userUpdateFormRight">
                            <div className="userUpdateUpload">
                                <img src="https://images.pexels.com/photos/598917/pexels-photo-598917.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="userUpdateImg" />
                                <label htmlFor="file">
                                    <Publish className='userUpdateIcon'/>
                                </label>
                                <input type="file" id='file' style={{display:"none"}} />
                            </div>
                            <button className="userUpdateBtn">
                                Update
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default User