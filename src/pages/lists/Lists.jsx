import "./lists.css";
import { DeleteOutline, Edit } from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ListContext } from "../../context/listContext/ListContext";
import { deleteList, getLists } from "../../context/listContext/listApiCalls";

const Lists = () => {
  const { lists, dispatch } = useContext(ListContext);

  useEffect(() => {
    getLists(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteList(id, dispatch);
  };
  const columns = [
    { field: "_id", headerName: "ID", width: 250 },
    { field: "title", headerName: "Title", width: 250 },
    { field: "genre", headerName: "Genre", width: 250 },
    { field: "type", headerName: "Type", width: 250 },
    {
      field: "action",
      headerName: "Action ",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="userListIcons">
            <Link
              to={{
                pathname: "/list/" + params.row._id,
              }}
              state={{ list: params.row }} // Pass the state here
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
        rows={lists}
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

export default Lists;
