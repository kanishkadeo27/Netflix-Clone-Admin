import { Link, useLocation } from "react-router-dom";
import "./listPage.css";
import { Publish } from "@mui/icons-material";
import { useState, useContext, useEffect } from "react";
import { updateMovie } from "../../context/movieContext/movieApiCalls";
import { MovieContext } from "../../context/movieContext/MovieContext";
import supabase from "../../supabase"; // Import Supabase

const ListPage = () => {
  const location = useLocation();
  const [list, setList] = useState(location.state?.list);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setList((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleFileChange = (e) => {
    // const { name, files } = e.target;
    // if (!files.length) return;
    // const file = files[0];
    // console.log(file);
    // switch (name) {
    //   case "img":
    //     setImg(file);
    //     break;
    //   case "imgTitle":
    //     setImgTitle(file);
    //     break;
    //   case "imgSm":
    //     setImgSm(file);
    //     break;
    //   case "trailer":
    //     setTrailer(file);
    //     break;
    //   case "video":
    //     setVideo(file);
    //     break;
    //   default:
    //     break;
    // }
  };

  const uploadFiles = async () => {
    // const filesToUpload = [
    //   { file: img, label: "img" },
    //   { file: imgTitle, label: "imgTitle" },
    //   { file: imgSm, label: "imgSm" },
    //   { file: trailer, label: "trailer" },
    //   { file: video, label: "video" },
    // ];
    // let updatedMovie = { ...movie }; // Start with the current movie state
    // let uploadCount = 0;
    // for (const item of filesToUpload) {
    //   if (item.file) {
    //     const fileName = `${Date.now()}_${item.label}_${item.file.name}`;
    //     // Upload file to Supabase
    //     const { data, error } = await supabase.storage
    //       .from("files-uploads")
    //       .upload(fileName, item.file, {
    //         cacheControl: "3600",
    //         upsert: false,
    //       });
    //     if (error) {
    //       console.error(`Upload error (${item.label}):`, error);
    //       return updatedMovie; // Return partially updated movie in case of failure
    //     }
    //     // ✅ Get the public URL correctly
    //     const publicUrl = supabase.storage
    //       .from("files-uploads")
    //       .getPublicUrl(fileName).publicUrl;
    //     if (publicUrl) {
    //       updatedMovie[item.label] = publicUrl;
    //       uploadCount++;
    //     }
    //     console.log(uploadCount);
    //   }
    // }
    // console.log("updated movie", updateMovie);
    // // ✅ Ensure state is updated only once after all files are uploaded
    // setMovie(updatedMovie);
    // setUploaded((prev) => prev + uploadCount);
    // return updatedMovie; // ✅ Return the fully updated movie object
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();
    // const updatedMovie = await uploadFiles(); // Ensure files are uploaded before updating
    // console.log("123", updateMovie);
    // try {
    //   console.log("Updated Movie Before Sending:", updatedMovie);
    //   // ✅ Ensure updated movie object is sent, not outdated state
    //   await updateMovie(updatedMovie._id, updatedMovie, dispatch);
    //   console.log("Movie updated successfully!");
    // } catch (err) {
    //   console.error("Error updating movie", err);
    // }
  };
  return (
    <div className="productPage">
      <div className="productTitleContainer">
        <h1 className="productTitle">Edit List</h1>
        <Link to="/newList">
          <button className="productButton">Create</button>
        </Link>
      </div>

      <div className="productShow">
        <div className="productTopRight">
          <div className="productInfoTop">
            <span className="productName">{list?.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{list?._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">genre:</span>
              <span className="productInfoValue">{list?.genre}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">type:</span>
              <span className="productInfoValue">{list?.type}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="productUpdate">
        <span className="productUpdateTitle">Edit</span>
        <form className="productUpdateForm" onSubmit={handleSubmit}>
          <div className="productUpdateFormLeft">
            <div className="productUpdateItem">
              <label>List Title</label>
              <input
                type="text"
                className="productUpdateInput"
                name="title"
                value={list.title}
                onChange={handleChange}
                placeholder={list?.title}
              />
            </div>
            <div className="productUpdateItem">
              <label>Genre</label>
              <input
                type="text"
                className="productUpdateInput"
                name="genre"
                value={list.genre}
                onChange={handleChange}
                placeholder={list?.genre}
              />
            </div>
            <div className="productUpdateItem">
              <label>Type</label>
              <input
                type="text"
                className="productUpdateInput"
                name="limit"
                value={list.type}
                onChange={handleChange}
                placeholder="movies or series"
              />
            </div>
          </div>
          <div className="productUpdateFormRight">
            <button className="productUpdateBtn" type="submit">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ListPage;
