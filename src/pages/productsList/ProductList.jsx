import './productList.css'
import { DeleteOutline, Edit } from "@mui/icons-material";
import { DataGrid } from '@mui/x-data-grid';
import { productRows } from '../../dummyData';
import { Link } from "react-router-dom";
import { useState } from "react";
import User from "../userPage/User";

const ProductList = () => {
  const [data, setData] = useState(productRows);
    
    const handleDelete = (id) => {
        setData(data?.filter(item => item?.id !== id))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'product', headerName: 'Product', width: 200, renderCell: (params) => {
                return (
                    <div className="productListItem">
                        <img className="productListImg" src={params.row.img} alt="" />
                        {params.row.name}
                    </div>
                )
            }
        },
        { field: 'stock', headerName: 'Stock', width: 120 },
        { field: 'status', headerName: 'Status', width: 120 },
        { field: 'price', headerName: 'Price', width: 160 },
        {
            field: 'action', headerName: 'Action ', width: 150, renderCell: (params) => {
                return (
                    <div className="userListIcons">
                        <Link to={'/product/' + params.row.id} className="usersLink" element={<User id={params.row.id}/>} >
                            <Edit className="productListIconEdit" />
                        </Link>
                        <DeleteOutline className="productListIconDelete" onClick={() => handleDelete(params.row.id)} />
                    </div>
                )
            }
        },
    ];
  return (
    <div className='productList'>
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

export default ProductList