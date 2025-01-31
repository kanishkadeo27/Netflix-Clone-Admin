import { DeleteOutline, Edit } from "@mui/icons-material";
import "./userList.css"
import { DataGrid } from '@mui/x-data-grid';
import { userRows } from '../../dummyData';
import { Link } from "react-router-dom";
import { useState } from "react";
import User from "../userPage/User";




const UserList = () => {
    const [data, setData] = useState(userRows);
    
    const handleDelete = (id) => {
        setData(data?.filter(item => item?.id !== id))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'user', headerName: 'User', width: 200, renderCell: (params) => {
                return (
                    <div className="userListUser">
                        <img className="userListUserImg" src={params.row.avatar} alt="" />
                        {params.row.username}
                    </div>
                )
            }
        },
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'status', headerName: 'Status', width: 120 },
        { field: 'transaction', headerName: 'Transaction Volume', width: 160 },
        {
            field: 'action', headerName: 'Action ', width: 150, renderCell: (params) => {
                return (
                    <div className="userListIcons">
                        <Link to={'/user/' + params.row.id} className="usersLink" element={<User id={params.row.id}/>} >
                            <Edit className="userListIconEdit" />
                        </Link>
                        <DeleteOutline className="userListIconDelete" onClick={() => handleDelete(params.row.id)} />
                    </div>
                )
            }
        },
    ];

    return (
        <div className="userList">
            <DataGrid
                rows={data}
                columns={columns}
                disableRowSelectionOnClick
                checkboxSelection
                pagination
                pageSizeOptions={[5, 10, 15, 20]}
                initialState={{
                    pagination: {
                        paginationModel: { pageSize: 12, page: 0 }, // Default page size is 5
                    },
                }}
            />
        </div>
    )
}

export default UserList