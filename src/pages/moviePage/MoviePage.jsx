import { Link, useLocation } from "react-router-dom";
import "./moviePage.css";
import { Publish } from "@mui/icons-material";
import { useState, useContext, useEffect } from "react";
import { updateMovie } from "../../context/movieContext/movieApiCalls";
import { MovieContext } from "../../context/movieContext/MovieContext";
import supabase from "../../supabase"; // Import Supabase

const ProductPage = () => {
  const location = useLocation();
  const [movie, setMovie] = useState(location.state?.movie);
  const { dispatch } = useContext(MovieContext);

  const [img, setImg] = useState(null);
  const [imgTitle, setImgTitle] = useState(null);
  const [imgSm, setImgSm] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [video, setVideo] = useState(null);
  const [uploaded, setUploaded] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovie((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (!files.length) return;

    const file = files[0];
    console.log(file);

    switch (name) {
      case "img":
        setImg(file);
        break;
      case "imgTitle":
        setImgTitle(file);
        break;
      case "imgSm":
        setImgSm(file);
        break;
      case "trailer":
        setTrailer(file);
        break;
      case "video":
        setVideo(file);
        break;
      default:
        break;
    }
  };

  const uploadFiles = async () => {
    const filesToUpload = [
      { file: img, label: "img" },
      { file: imgTitle, label: "imgTitle" },
      { file: imgSm, label: "imgSm" },
      { file: trailer, label: "trailer" },
      { file: video, label: "video" },
    ];

    let updatedMovie = { ...movie }; // Start with the current movie state
    let uploadCount = 0;

    for (const item of filesToUpload) {
      if (item.file) {
        const fileName = `${Date.now()}_${item.label}_${item.file.name}`;

        // Upload file to Supabase
        const { data, error } = await supabase.storage
          .from("files-uploads")
          .upload(fileName, item.file, {
            cacheControl: "3600",
            upsert: false,
          });

        if (error) {
          console.error(`Upload error (${item.label}):`, error);
          return updatedMovie; // Return partially updated movie in case of failure
        }

        // ✅ Get the public URL correctly
        const publicUrl = supabase.storage
          .from("files-uploads")
          .getPublicUrl(fileName).publicUrl;

        if (publicUrl) {
          updatedMovie[item.label] = publicUrl;
          uploadCount++;
        }
        console.log(uploadCount);
      }
    }

    console.log("updated movie", updateMovie);
    // ✅ Ensure state is updated only once after all files are uploaded
    setMovie(updatedMovie);
    setUploaded((prev) => prev + uploadCount);

    return updatedMovie; // ✅ Return the fully updated movie object
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedMovie = await uploadFiles(); // Ensure files are uploaded before updating
    console.log("123", updateMovie);
    try {
      console.log("Updated Movie Before Sending:", updatedMovie);

      // ✅ Ensure updated movie object is sent, not outdated state
      await updateMovie(updatedMovie._id, updatedMovie, dispatch);

      console.log("Movie updated successfully!");
    } catch (err) {
      console.error("Error updating movie", err);
    }
  };

  return (
    <div className="productPage">
      <div className="productTitleContainer">
        <h1 className="productTitle">Edit Movie</h1>
        <Link to="/newMovie">
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
        <form className="productUpdateForm" onSubmit={handleSubmit}>
          <div className="productUpdateFormLeft">
            <div className="productUpdateItem">
              <label>Movie Title</label>
              <input
                type="text"
                className="productUpdateInput"
                name="title"
                value={movie.title}
                onChange={handleChange}
                placeholder={movie?.title}
              />
            </div>
            <div className="productUpdateItem">
              <label>Year</label>
              <input
                type="text"
                className="productUpdateInput"
                name="year"
                value={movie.year}
                onChange={handleChange}
                placeholder={movie?.year}
              />
            </div>
            <div className="productUpdateItem">
              <label>Genre</label>
              <input
                type="text"
                className="productUpdateInput"
                name="genre"
                value={movie.genre}
                onChange={handleChange}
                placeholder={movie?.genre}
              />
            </div>
            <div className="productUpdateItem">
              <label>Limit</label>
              <input
                type="text"
                className="productUpdateInput"
                name="limit"
                value={movie.limit}
                onChange={handleChange}
                placeholder={movie?.limit}
              />
            </div>
            <div className="productUpdateItem">
              <label>Description</label>
              <input
                type="text"
                className="productUpdateInput"
                name="desc"
                value={movie.desc}
                onChange={handleChange}
                placeholder={movie?.desc}
              />
            </div>
            <div className="productUpdateItem">
              <label>Duration</label>
              <input
                type="text"
                className="productUpdateInput"
                name="duration"
                value={movie.duration}
                onChange={handleChange}
                placeholder={movie?.duration}
              />
            </div>
            <div className="productUpdateItem">
              <label>Series or not</label>
              <input
                type="text"
                className="productUpdateInput"
                name="isSeries"
                value={movie.isSeries}
                onChange={handleChange}
                placeholder={movie?.isSeries?.toString()}
              />
            </div>
            <div className="productUpdateItem">
              <label>Trailer</label>
              <input
                type="file"
                className="productUpdateInput"
                name="trailer"
                onChange={handleFileChange}
              />
              <span
                style={{ color: "green", fontSize: "14px", marginLeft: "10px" }}
              >
                {movie?.trailer ? "Previously uploaded" : "No file uploaded"}
              </span>
            </div>
            <div className="productUpdateItem">
              <label>Video</label>
              <input
                type="file"
                className="productUpdateInput"
                name="video"
                onChange={handleFileChange}
              />
              <span
                style={{ color: "green", fontSize: "14px", marginLeft: "10px" }}
              >
                {movie?.video ? "Previously uploaded" : "No file uploaded"}
              </span>
            </div>
            <div className="productUpdateItem">
              <label>ImgSm</label>
              <input
                type="file"
                className="productUpdateInput"
                name="imgSm"
                onChange={handleFileChange}
              />
              <span
                style={{ color: "green", fontSize: "14px", marginLeft: "10px" }}
              >
                {movie?.imgSm ? "Previously uploaded" : "No file uploaded"}
              </span>
            </div>
            <div className="productUpdateItem">
              <label>ImgTitle</label>
              <input
                type="file"
                className="productUpdateInput"
                name="imgTitle"
                onChange={handleFileChange}
              />
              <span
                style={{ color: "green", fontSize: "14px", marginLeft: "10px" }}
              >
                {movie?.imgTitle ? "Previously uploaded" : "No file uploaded"}
              </span>
            </div>
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
              <input
                type="file"
                id="file"
                style={{ display: "none" }}
                onChange={handleFileChange}
                name="img"
              />
            </div>
            {uploaded === 5 ? (
              <button className="productUpdateBtn" type="submit">
                Update
              </button>
            ) : (
              <button className="productUpdateBtn" onClick={uploadFiles}>
                Upload
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductPage;
