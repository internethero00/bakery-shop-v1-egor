import {ShopCartProdType, TableShopCartDataType} from "../utils/shop-types.ts";
const ShoppingCart = () => {

    const {currProds} = useAppSelector(state => state.product)
    const {authUser} = useAppSelector(state => state.auth)
    const {cartProducts} = useAppSelector(state => state.cart)
    const getTableShopCartProduct = (prod: ShopCartProdType) => {
        const product = currProds.find(item => item.id === prod.cartProdId)
        let res: TableShopCartDataType = {
            id: undefined,
            amount: 0,
            category: "",
            cost: 0,
            count: 0,
            img: "",
            title: "",
            unit: ""
        }
        if (!product) {
            removeProductFromCart(`${authUser}_collection`, prod.cartProdId)
        } else {
            res = {...product, count: prod.count, amount: prod.count * product.cost}
        }
        return res
    }

    const columns: GridColDef<(typeof rows)[number]>[]  = [
        // { field: 'id', headerName: 'ID', width: 90, flex: 0.3},
        { field: 'title', headerName: 'Product Name', width: 90, flex: 1},
        // { field: 'category', headerName: 'Category', width: 90},
        { field: 'unit', headerName: 'Unit', width: 90},
        { field: 'cost', headerName: 'Price in ILS', width: 90},
        { field: 'count', headerName: 'Quantity', width: 90, flex: 0.4, editable: true},
        { field: 'amount', headerName: 'Amount in ILS', width: 90, flex: 0.4, editable: true},
        { field: 'img', width: 200, renderCell: (params) => {
                return(
                    <Avatar src={'/images/'+params.value} sx={{width: '100', height: '100', marginTop: '5px'}}/>
                )
            } },
        {field: 'actions', type: 'actions', flex:0.3, getActions: ({id}) => [
                <img src={'/images/trash_can.jpg'} style={{width: '20px'}}
            onClick={() => removeProductFromCart(`${authUser}_collection`, id as string)}
             alt={'delete'}/>
            ]}

    ]

    const rows = cartProducts.map(prod => getTableShopCartProduct(prod)).filter(tabProd => {
        return  tabProd.id !== undefined
    })

    return (
        <Box>
            <DataGrid columns={columns} rows={rows} />
        </Box>
    );
};
import {useAppSelector} from "../redux/hooks.ts";
import {removeProductFromCart} from "../firebase/firebaseCartService.ts";
import {DataGrid, GridColDef} from "@mui/x-data-grid";


import {Avatar, Box} from "@mui/material";

export default ShoppingCart;