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
import {addProduct, removeProduct, updateProduct} from "../../firebase/firebaseDBService.ts";
import {getImgUrl} from "../../utils/tools.ts";
import Button from "@mui/material/Button";
import {useState} from "react";
import AddProductForm from "../form/AddProductForm.tsx";
import {ProductType} from "../../utils/shop-types.ts";

const BreadProductsAdmin = () => {
    const {currProds} = useAppSelector(state => state.product)
    const [displayForm, setDisplayForm] = useState<boolean>(false)
    const rows = currProds
    const columns: GridColDef<(typeof rows)[number]>[]  = [
        { field: 'id', headerName: 'ID', width: 90, flex: 0.3},
        { field: 'title', headerName: 'Product Name', width: 90, flex: 1},
        { field: 'category', headerName: 'Category', width: 90},
        { field: 'unit', headerName: 'Unit', width: 90},
        { field: 'cost', headerName: 'Price in ILS', width: 90, editable: true},
        { field: 'img', width: 200, renderCell: (params) => {
            return(
                // <Avatar src={'/images/'+params.value}/>
                <Avatar src={getImgUrl(params.value)}/>
            )
            }, editable: true },
        {field: 'actions', type: 'actions', flex:0.3, getActions: ({id}) => [
                <img src={'/images/trash_can.jpg'} style={{width: '20px'}}
                     onClick={() => removeProduct(id as string)}
                     alt={'delete'}/>
            ]}
    ]
    function addProductHandler() {
        setDisplayForm(true)
    }

    function resetDisplay() {
        setDisplayForm(false)
    }
    return (
        <Box sx={{width:'90vw', height:'80vh', margin: '0 auto'}} onClick={resetDisplay}>
            <DataGrid columns={columns} rows={rows}
                      processRowUpdate={async (newRow) => {
                          if (newRow.cost <= 0 || newRow.cost > 1000)
                              throw ('Wrong data. Cost must be positive')
                          await updateProduct(newRow)
                          return newRow
                      }}
                            onProcessRowUpdateError={(error) => {
                                alert(error + " changes not saved")
                            }}
            />
            <Button variant="outlined"
            onClick={(e) => {
                e.stopPropagation()
                addProductHandler()}}
            >New Product</Button>
            {displayForm &&
            <AddProductForm submitFn={async (product: ProductType) => {
                await addProduct(product);
                setDisplayForm(false)
            }}/>
            }
        </Box>
    );
};

export default BreadProductsAdmin;