import { Link } from 'react-router-dom'
import './productPage.css'
import { CalendarToday, EmailOutlined, LocationCityOutlined, PermIdentity, PhoneAndroid, Publish } from '@mui/icons-material'
import Chart from '../../Components/chart/Chart';

import { productData } from '../../dummyData';
const ProductPage = () => {
    return (
        <div className='productPage'>

            <div className="productTitleContainer">
                <h1 className="productTitle">
                    Edit product
                </h1>
                <Link to='/newProduct'>
                    <button className="productButton">Create</button>
                </Link>
            </div>

                <div className="productShow"> 
                        <div className="productTopLeft">
                            <Chart data={productData} dataKey="Sales" title="Sales Performance" />
                        </div>
                        <div className="productTopRight">
                            <div className="productInfoTop">
                                <img src="https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="productImg" />
                                <span className="productName">Apple Airpods</span>

                            </div>
                            <div className="productInfoBottom">
                                <div className="productInfoItem">
                                    <span className="productInfoKey">
                                        id:
                                    </span>
                                    <span className="productInfoValue">
                                        123
                                    </span>
                                </div>
                                <div className="productInfoItem">
                                    <span className="productInfoKey">
                                        sales:
                                    </span>
                                    <span className="productInfoValue">
                                        5000
                                    </span>
                                </div>
                                <div className="productInfoItem">
                                    <span className="productInfoKey">
                                        active:
                                    </span>
                                    <span className="productInfoValue">
                                        yes
                                    </span>
                                </div>
                                <div className="productInfoItem">
                                    <span className="productInfoKey">
                                        in stock:
                                    </span>
                                    <span className="productInfoValue">
                                        no
                                    </span>
                                </div>
                            </div>

                        </div>
                </div>

                <div className="productUpdate">
                    <span className="productUpdateTitle">Edit</span>
                    <form className="productUpdateForm">
                        <div className="productUpdateFormLeft">
                            <div className="productUpdateItem">
                                <label >Product Name</label>
                                <input type="text" className='productUpdateInput' placeholder='apple airpods' />
                            </div>
                            <div className="productUpdateItem">
                                <label >In Stock</label>
                                <select name="inStock" id='inStock' >
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>
                            <div className="productUpdateItem">
                                <label >Active</label>
                                <select name="active" id='active' >
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>
                            
                        </div>
                        <div className="productUpdateFormRight">
                            <div className="productUpdateUpload">
                                <img src="https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="productUpdateImg" />
                                <label htmlFor="file">
                                    <Publish className='productUpdateIcon' />
                                </label>
                                <input type="file" id='file' style={{ display: "none" }} />
                            </div>
                            <button className="productUpdateBtn">
                                Update
                            </button>
                        </div>
                    </form>
                </div>

            </div>
    )
}

export default ProductPage