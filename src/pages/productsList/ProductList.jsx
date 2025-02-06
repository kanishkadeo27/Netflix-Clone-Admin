import "./productList.css";
import { DeleteOutline, Edit } from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import User from "../userPage/User";
import { MovieContext } from "../../context/movieContext/MovieContext";
import {
  deleteMovie,
  getMovies,
} from "../../context/movieContext/movieApiCalls";

const ProductList = () => {
  const [data, setData] = useState(productRows);
  const { movies, dispatch } = useContext(MovieContext);

  useEffect(() => {
    getMovies(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteMovie(id, dispatch);
  };
  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "movie",
      headerName: "Movie",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "genre", headerName: "Genre", width: 120 },
    { field: "year", headerName: "Year", width: 120 },
    { field: "limit", headerName: "Limit", width: 120 },
    { field: "isSeries", headerName: "isSeries", width: 120 },
    { field: "desc", headerName: "Description", width: 120 },

    {
      field: "action",
      headerName: "Action ",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="userListIcons">
            <Link
              to={{
                pathname: "/product/" + params.row._id,
              }}
              state={{ movie: params.row }} // Pass the state here
              className="usersLink"
            >
              <Edit className="productListIconEdit" />
            </Link>

            <DeleteOutline
              className="productListIconDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </div>
        );
      },
    },
  ];
  return (
    <div className="productList">
      <DataGrid
        rows={movies}
        columns={columns}
        disableRowSelectionOnClick
        checkboxSelection
        pagination
        getRowId={(r) => r._id}
        pageSizeOptions={[5, 10, 15, 20]}
        initialState={{
          pagination: {
            paginationModel: { pageSize: 12, page: 0 },
          },
        }}
      />
    </div>
  );
};

export default ProductList;
