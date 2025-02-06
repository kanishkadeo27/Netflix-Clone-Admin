import { useState } from "react";
import "./newProduct.css";

const NewProduct = () => {
  const [movie, setMovie] = useState(null);
  const [isSeries, setIsSeries] = useState(false);
  const [img, setImg] = useState(null);
  const [imgTitle, setImgTitle] = useState(null);
  const [imgSm, setImgSm] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [video, setVideo] = useState(null);

  const handleChange = (e) => {
    const value = e.target.value;
    setMovie({ ...movie, [e.target.name]: value });
  };
  const handleSeriesChange = (e) => {
    console.log(e.target.value);
    setIsSeries(e.target.value);
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  console.log(movie);
  console.log(img);
  return (
    <div className="newProduct">
      <h1 className="newProductTitle">New Movie</h1>
      <form className="newProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input
            type="file"
            name="img"
            id="image"
            onChange={(e) => setImg(e.target.files[0])}
          />
        </div>
        <div className="addProductItem">
          <label>Title Image</label>
          <input
            type="file"
            name="imgTitle"
            id="imgTitle"
            onChange={(e) => setImgTitle(e.target.files[0])}
          />
        </div>
        <div className="addProductItem">
          <label>Thumbnail Image</label>
          <input
            type="file"
            name="imgSm"
            id="imgSm"
            onChange={(e) => setImgSm(e.target.files[0])}
          />
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input
            type="text"
            onChange={handleChange}
            placeholder="Enter the movie name"
            name="title"
          />
        </div>
        <div className="addProductItem">
          <label>Genre</label>
          <input
            type="text"
            onChange={handleChange}
            placeholder="Enter the genre"
            name="genre"
          />
        </div>
        <div className="addProductItem">
          <label>Year</label>
          <input
            type="text"
            onChange={handleChange}
            placeholder="Enter the year"
            name="year"
          />
        </div>
        <div className="addProductItem">
          <label>Limit</label>
          <input
            type="text"
            onChange={handleChange}
            placeholder="Enter the age limit"
            name="limit"
          />
        </div>
        <div className="addProductItem">
          <label>Duration</label>
          <input
            type="text"
            onChange={handleChange}
            placeholder="Enter the duration"
            name="duration"
          />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input
            type="text"
            onChange={handleChange}
            placeholder="Enter the movie description"
            name="desc"
          />
        </div>
        <div className="addProductItem">
          <label>Is Series?</label>
          <select
            name="isSeries"
            id="isSeries"
            onChange={handleSeriesChange}
            value={isSeries}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>

        <div className="addProductItem">
          <label>Trailer</label>
          <input
            type="file"
            id="trailer"
            name="trailer"
            onChange={(e) => setTrailer(e.target.files[0])}
          />
        </div>
        <div className="addProductItem">
          <label>Video</label>
          <input
            type="file"
            id="video"
            name="video"
            onChange={(e) => setVideo(e.target.files[0])}
          />
        </div>

        <button className="newProductBtn">Upload</button>
      </form>
    </div>
  );
};

export default NewProduct;
