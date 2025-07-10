import {useAppSelector} from "../../redux/hooks.ts";
import {Card, CardActions, CardContent, CardMedia, Grid} from "@mui/material";
import {ProductType} from "../../utils/shop-types.ts";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";
import {addProductUnitToCart, removeProductUnitToCart} from "../../firebase/firebaseCartService.ts";
import {getImgUrl} from "../../utils/tools.ts";


const BreadProductsUser = () => {
    const {currProds} = useAppSelector(state => state.product)
    const {authUser} = useAppSelector(state => state.auth)
    const {cartProducts} = useAppSelector(state => state.cart)
    const navigate = useNavigate();

    return (
        <Grid container spacing={2}>
            {currProds.map((item: ProductType) =>
                <Grid key={item.id} size={{xs: 12, sm: 6, md: 3}}>
                    <Card sx={{
                        maxWidth: 345,
                        height: "100%",
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                    }}>
                        <CardMedia
                            sx={{height: 140}}
                            image={getImgUrl(item.img)}
                            title={item.title}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {item.title}
                            </Typography>
                            <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions sx={{
                            justifyContent: "space-around",
                        }}>
                            <Button size="small"
                                    sx={{
                                        fontSize: "1.2rem",
                                        padding: "0 20px",
                                        color: "black",
                                        border: "1px solid black",
                                    }}
                                    onClick={async () => {
                                        if (!authUser) {
                                            navigate("/login");
                                        } else {
                                            await addProductUnitToCart(`${authUser}_collection`, item.id!)
                                        }

                                    }}
                            >+</Button>
                            <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: "1.2rem" }}>
                                {cartProducts.find(cartProd => cartProd.cartProdId == item.id)?.count ?? 0}
                            </Typography>
                            <Button size="small"
                                    sx={{
                                        fontSize: "1.2rem",
                                        padding: "0 20px",
                                        color: "black",
                                        border: "1px solid black",
                                    }}
                                    onClick={async () => {
                                        if (!authUser) {
                                            navigate("/login");
                                        } else {
                                            await removeProductUnitToCart(`${authUser}_collection`, item.id!)
                                        }

                                    }}
                            >-</Button>
                        </CardActions>
                    </Card>
                </Grid>
            )}
        </Grid>

    );
};

export default BreadProductsUser;