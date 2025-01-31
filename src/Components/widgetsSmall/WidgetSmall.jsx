import { Visibility } from '@mui/icons-material';
import './widgetsmall.css';

const WidgetSmall = () => {
  return (
    <div className='widgetSmall'>
        <span className="widgetSmTitle">
            New Joined Members
        </span>
        <ul className="widgetSmList">
            <li className="widgetSmListItem">
                <img src="https://images.pexels.com/photos/18015188/pexels-photo-18015188/free-photo-of-a-man-with-a-hat-and-gloves-holding-a-camera.jpeg?auto=compress&cs=tinysrgb&w=400" alt="profileimg" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Anna Keller</span>
                    <span className="widgetSmUserTitle">Software Engineer</span>
                </div>
                <button className='widgetSmButton'>
                    <Visibility className="visibilityBtn"/> Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src="https://images.pexels.com/photos/18015188/pexels-photo-18015188/free-photo-of-a-man-with-a-hat-and-gloves-holding-a-camera.jpeg?auto=compress&cs=tinysrgb&w=400" alt="profileimg" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Anna Keller</span>
                    <span className="widgetSmUserTitle">Software Engineer</span>
                </div>
                <button className='widgetSmButton'>
                    <Visibility className="visibilityBtn"/> Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src="https://images.pexels.com/photos/18015188/pexels-photo-18015188/free-photo-of-a-man-with-a-hat-and-gloves-holding-a-camera.jpeg?auto=compress&cs=tinysrgb&w=400" alt="profileimg" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Anna Keller</span>
                    <span className="widgetSmUserTitle">Software Engineer</span>
                </div>
                <button className='widgetSmButton'>
                    <Visibility className="visibilityBtn"/> Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src="https://images.pexels.com/photos/18015188/pexels-photo-18015188/free-photo-of-a-man-with-a-hat-and-gloves-holding-a-camera.jpeg?auto=compress&cs=tinysrgb&w=400" alt="profileimg" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Anna Keller</span>
                    <span className="widgetSmUserTitle">Software Engineer</span>
                </div>
                <button className='widgetSmButton'>
                    <Visibility className="visibilityBtn"/> Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src="https://images.pexels.com/photos/18015188/pexels-photo-18015188/free-photo-of-a-man-with-a-hat-and-gloves-holding-a-camera.jpeg?auto=compress&cs=tinysrgb&w=400" alt="profileimg" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Anna Keller</span>
                    <span className="widgetSmUserTitle">Software Engineer</span>
                </div>
                <button className='widgetSmButton'>
                    <Visibility className="visibilityBtn"/> Display
                </button>
            </li>
        </ul>
    </div>
  )
}

export default WidgetSmall