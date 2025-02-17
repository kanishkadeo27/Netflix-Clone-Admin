import axios from "axios";

import {
  createListFailure,
  createListStart,
  createListSuccess,
  deleteListFailure,
  deleteListStart,
  deleteListSuccess,
  getListsFailure,
  getListsStart,
  getListsSuccess,
} from "./ListActions";
// get lists
export const getLists = async (dispatch) => {
  dispatch(getListsStart());
  try {
    const res = await axios.get("/lists", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(getListsSuccess(res.data));
  } catch (error) {
    dispatch(getListsFailure());
  }
};
// create
export const createList = async (list, dispatch) => {
  dispatch(createListStart());
  try {
    const res = await axios.post("/lists", list, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(createListSuccess(res?.data));
  } catch (error) {
    dispatch(createListFailure());
  }
};
// // update movie
// export const updateMovie = async (movieId, updatedMovie, dispatch) => {
//   console.log("updatedMovie", updatedMovie);
//   dispatch(updateMovieStart());
//   try {
//     const res = await axios.put(`/movies/${movieId}`, updatedMovie, {
//       headers: {
//         token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
//       },
//     });
//     dispatch(updateMovieSuccess(res?.data));
//   } catch (error) {
//     dispatch(updateMovieFailure());
//   }
// };

// delete movie
export const deleteList = async (id, dispatch) => {
  dispatch(deleteListStart());
  try {
    console.log("Sending delete request for ID:", id); // Debugging
    await axios.delete("/lists/" + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(deleteListSuccess(id));
    console.log("deleted successfully");
  } catch (error) {
    console.log("delete request failed due to ", error);
    dispatch(deleteListFailure());
  }
};
