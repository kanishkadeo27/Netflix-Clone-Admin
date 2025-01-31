import Chart from "../../Components/chart/Chart";
import FeaturedInfo from "../../Components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "./../../dummyData";
import WidgetSmall from "../../Components/widgetsSmall/WidgetSmall";
import WidgetLarge from "../../Components/widgetsLarge/WidgetLarge";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";

const Home = () => {
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );
  const [userStats, setUserStats] = useState([]);

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axios.get("/users/stats", {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NmQ2YmUwMzEwODk2MDBlOTllZThhNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTczNzgwMDEzMSwiZXhwIjoxNzM4MjMyMTMxfQ.kLpVu86zaZh_4UGKKgOTZbH5Q0ts6xqcwImJ6gzFWFU",
          },
        });
        const statsList = res?.data?.sort(function (a, b) {
          return a._id - b._id;
        });
        const stats = statsList.map((item) => ({
          name: MONTHS[item?._id - 1],
          "New User": item?.total,
        }));

        setUserStats(stats); // Update the state once with the aggregated data
      } catch (error) {
        console.log(error);
      }
    };
    getStats();
  }, [MONTHS]);

  console.log(userStats);
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userStats} title="User Analytics" grid dataKey="New User" />
      <div className="homeWidgets">
        <WidgetSmall />
        <WidgetLarge />
      </div>
    </div>
  );
};

export default Home;
