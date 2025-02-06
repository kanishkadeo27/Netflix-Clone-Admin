import { Link, useLocation } from "react-router-dom";
import "./productPage.css";
import { Publish } from "@mui/icons-material";
const ProductPage = () => {
  const location = useLocation();
  const movie = location.state?.movie;
  console.log(movie);
  return (
    <div className="productPage">
      <div className="productTitleContainer">
        <h1 className="productTitle">Edit Movie</h1>
        <Link to="/newProduct">
          <button className="productButton">Create</button>
        </Link>
      </div>

      <div className="productShow">
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={movie?.img} alt="" className="productImg" />
            <span className="productName">{movie?.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{movie?._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">genre:</span>
              <span className="productInfoValue">{movie?.genre}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">year:</span>
              <span className="productInfoValue">{movie?.year}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">limit:</span>
              <span className="productInfoValue">{movie?.limit}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">description:</span>
              <span className="productInfoValue">{movie?.desc}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">duration:</span>
              <span className="productInfoValue">{movie?.duration}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="productUpdate">
        <span className="productUpdateTitle">Edit</span>
        <form className="productUpdateForm">
          <div className="productUpdateFormLeft">
            <div className="productUpdateItem">
              <label>Movie Title</label>
              <input
                type="text"
                className="productUpdateInput"
                placeholder={movie?.title}
              />
            </div>
            <div className="productUpdateItem">
              <label>Year</label>
              <input
                type="text"
                className="productUpdateInput"
                placeholder={movie?.year}
              />
            </div>
            <div className="productUpdateItem">
              <label>Genre</label>
              <input
                type="text"
                className="productUpdateInput"
                placeholder={movie?.genre}
              />
            </div>
            <div className="productUpdateItem">
              <label>Limit</label>
              <input
                type="text"
                className="productUpdateInput"
                placeholder={movie?.limit}
              />
            </div>
            <div className="productUpdateItem">
              <label>Description</label>
              <input
                type="text"
                className="productUpdateInput"
                placeholder={movie?.desc}
              />
            </div>
            <div className="productUpdateItem">
              <label>Duration</label>
              <input
                type="text"
                className="productUpdateInput"
                placeholder={movie?.duration}
              />
            </div>
            <div className="productUpdateItem">
              <label>Series or not</label>
              <input
                type="text"
                className="productUpdateInput"
                placeholder={(movie?.isSeries).toString()}
              />
            </div>
            <div className="productUpdateItem">
              <label>Trailer</label>
              <input
                type="file"
                className="productUpdateInput"
                placeholder={movie?.trailer}
              />
            </div>
            <div className="productUpdateItem">
              <label>Video</label>
              <input
                type="file"
                className="productUpdateInput"
                placeholder={movie?.video}
              />
            </div>
            {/* <div className="productUpdateItem">
              <label>ImgSm</label>
              <input
                type="file"
                className="productUpdateInput"
                placeholder={movie?.imgSm}
              />
            </div>
            <div className="productUpdateItem">
              <label>ImgTitle</label>
              <input
                type="file"
                className="productUpdateInput"
                placeholder={movie?.imgTitle}
              />
            </div> */}
          </div>
          <div className="productUpdateFormRight">
            <div className="productUpdateUpload">
              <img
                src={movie?.img}
                alt="movieimg"
                className="productUpdateImg"
              />
              <label htmlFor="file">
                <Publish className="productUpdateIcon" />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productUpdateBtn">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductPage;
