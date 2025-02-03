import { Visibility } from "@mui/icons-material";
import "./widgetsmall.css";
import { useEffect, useState } from "react";
import axios from "axios";

const WidgetSmall = () => {
  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get("/users?new=true", {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NmQ2YmUwMzEwODk2MDBlOTllZThhNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTczODU4MDg0NSwiZXhwIjoxNzM5MDEyODQ1fQ.Lt5vyyBh0n2WZTLFDpqfjZxTDLEFYHfW1ZuWRclx5L4",
          },
        });
        setNewUsers(res?.data);
      } catch (error) {
        console.log(error);
      }
    };
    getNewUsers();
  }, []);

  return (
    <div className="widgetSmall">
      <span className="widgetSmTitle">New Joined Members</span>
      <ul className="widgetSmList">
        {newUsers?.map((user) => {
          return (
            <>
              <li className="widgetSmListItem">
                <img
                  src={
                    user?.profilePic ||
                    "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"
                  }
                  alt="profileimg"
                  className="widgetSmImg"
                />
                <div className="widgetSmUser">
                  <span className="widgetSmUsername">{user?.username}</span>
                  {/* <span className="widgetSmUserTitle">Software Engineer</span> */}
                </div>
                <button className="widgetSmButton">
                  <Visibility className="visibilityBtn" /> Display
                </button>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default WidgetSmall;
