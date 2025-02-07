import { useContext, useEffect, useState } from "react";
import "./newList.css";
import supabase from "../../supabase"; // Import Supabase
import { createList } from "../../context/listContext/listApiCalls";
import { ListContext } from "../../context/listContext/ListContext";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { getMovies } from "../../context/movieContext/movieApiCalls";
import { useNavigate } from "react-router-dom";

export default function NewList() {
  const [list, setList] = useState(null);
  const navigate = useNavigate();

  const { dispatch } = useContext(ListContext);
  const { movies, dispatch: dispatchMovie } = useContext(MovieContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setList({ ...list, [e.target.name]: value });
  };

  const handleSelect = (e) => {
    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    setList({ ...list, [e.target.name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      createList(list, dispatch);
    } catch (error) {
      console.log(error);
    }
    navigate("/lists");
  };

  useEffect(() => {
    getMovies(dispatchMovie);
  }, [dispatchMovie]);

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New List</h1>
      <form className="addProductForm" onSubmit={handleSubmit}>
        <div className="addProductItem">
          <label>Title</label>
          <input
            type="text"
            placeholder="Popular Movies"
            name="title"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Genre</label>
          <input
            type="text"
            placeholder="comedy"
            name="genre"
            onChange={handleChange}
          />
        </div>

        <div className="addProductItem">
          <label>Type</label>
          <select name="type" id="type" onChange={handleChange}>
            <option>Type</option>
            <option value="movies">Movies</option>
            <option value="series">Series</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Content</label>
          <select
            multiple
            name="content"
            id="content"
            onChange={handleSelect}
            style={{ height: "300px" }}
          >
            {movies?.map((movie) => (
              <option key={movie?._id} value={movie?._id}>
                {movie?.title}
              </option>
            ))}
          </select>
        </div>

        <button className="addProductButton" type="submit">
          Create
        </button>
      </form>
    </div>
  );
}
