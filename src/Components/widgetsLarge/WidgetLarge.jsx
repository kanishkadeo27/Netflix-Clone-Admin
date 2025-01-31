import { Visibility } from "@mui/icons-material";
import "./widgetlarge.css";

const WidgetLarge = () => {

  const Button = ({type})=>{
    return <button className={"widgetLgButton "+type}>{type}</button>
  }
  return (
    <div className='widgetLarge'>
      <h3 className="widgetLgTitle">
        Latest transactions
      </h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://images.pexels.com/photos/18015188/pexels-photo-18015188/free-photo-of-a-man-with-a-hat-and-gloves-holding-a-camera.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 June 2021
          </td>
          <td className="widgetLgAmt">$112.00
          </td>
          <td className="widgetLgStatus">
              <Button type="Approved"/>
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://images.pexels.com/photos/18015188/pexels-photo-18015188/free-photo-of-a-man-with-a-hat-and-gloves-holding-a-camera.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 June 2021
          </td>
          <td className="widgetLgAmt">$112.00
          </td>
          <td className="widgetLgStatus">
              <Button type="Declined"/>
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://images.pexels.com/photos/18015188/pexels-photo-18015188/free-photo-of-a-man-with-a-hat-and-gloves-holding-a-camera.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 June 2021
          </td>
          <td className="widgetLgAmt">$112.00
          </td>
          <td className="widgetLgStatus">
              <Button type="Pending"/>
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://images.pexels.com/photos/18015188/pexels-photo-18015188/free-photo-of-a-man-with-a-hat-and-gloves-holding-a-camera.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 June 2021
          </td>
          <td className="widgetLgAmt">$112.00
          </td>
          <td className="widgetLgStatus">
              <Button type="Approved"/>
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://images.pexels.com/photos/18015188/pexels-photo-18015188/free-photo-of-a-man-with-a-hat-and-gloves-holding-a-camera.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 June 2021
          </td>
          <td className="widgetLgAmt">$112.00
          </td>
          <td className="widgetLgStatus">
              <Button type="Pending"/>
          </td>
        </tr>
      </table>
    </div>
  )
}

export default WidgetLarge