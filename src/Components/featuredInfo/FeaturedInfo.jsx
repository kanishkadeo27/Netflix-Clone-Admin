import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import './featuredInfo.css';

const FeaturedInfo = () => {
  return (
    <div className='featuredInfo'>
      {/* 1 */}
      <div className="featuredItem">
        <span className="featuredTitle">
          Revenue
        </span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,145</span>
          <span className="featuredMoneyRate">-11.4<ArrowDownward className='featuredIcon negative'/></span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      {/* 2 */}
      <div className="featuredItem">
        <span className="featuredTitle">
          Sales
        </span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$4,445</span>
          <span className="featuredMoneyRate">-1.4<ArrowDownward className='featuredIcon negative'/></span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      {/* 3 */}
      <div className="featuredItem">
        <span className="featuredTitle">
          Cost
        </span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$1,145</span>
          <span className="featuredMoneyRate">+1.4<ArrowUpward className='featuredIcon positive'/></span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      
    </div>
  )
}

export default FeaturedInfo