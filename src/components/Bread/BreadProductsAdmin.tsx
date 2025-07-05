// export type ProductType = {
//     id?: string,
//     title: string,
//     category: string,
//     unit: string,
//     cost: number,
//     img: string,
// }

import {useAppSelector} from "../../redux/hooks.ts";
import {DataGrid, type GridColDef} from "@mui/x-data-grid";
import {Avatar, Box} from "@mui/material";
import {removeProduct} from "../../firebase/firebaseDBService.ts";

const BreadProductsAdmin = () => {
    const {currProds} = useAppSelector(state => state.product)
    const rows = currProds
    const columns: GridColDef<(typeof rows)[number]>[]  = [
        { field: 'id', headerName: 'ID', width: 90, flex: 0.3},
        { field: 'title', headerName: 'Product Name', width: 90, flex: 1},
        { field: 'category', headerName: 'Category', width: 90},
        { field: 'unit', headerName: 'Unit', width: 90},
        { field: 'cost', headerName: 'Price in ILS', width: 90},
        { field: 'img', width: 200, renderCell: (params) => {
            return(
                <Avatar src={'/images/'+params.value}/>
            )
            } },
        {field: 'actions', type: 'actions', flex:0.3, getActions: ({id}) => [
                <img src={'/images/trash_can.jpg'} style={{width: '20px'}}
                     onClick={() => removeProduct(id as string)}
                     alt={'delete'}/>
            ]}
    ]
    return (
        <Box>
            <DataGrid columns={columns} rows={rows} />
        </Box>
    );
};

export default BreadProductsAdmin;