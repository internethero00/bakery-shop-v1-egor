import {useAppSelector} from "../../redux/hooks.ts";
import {Card, CardActions, CardContent, CardMedia, Grid} from "@mui/material";
import type {ProductType} from "../../utils/shop-types.ts";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";
import {addProductUnitToCart} from "../../firebase/firebaseCartService.ts";


const BreadProductsUser = () => {
    const {currProds} = useAppSelector(state => state.product)
    const {authUser} = useAppSelector(state => state.auth)
    const navigate = useNavigate();

    return (
        <Grid container>
            {currProds.map((item: ProductType) =>
                <Grid key={item.id} size={{xs: 12, sm: 6, md: 3}}>
                    <Card sx={{maxWidth: 330, margin: "10px"}}>
                        <CardMedia
                            sx={{height: 140}}
                            image={"/images/"+item.img}
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
                        <CardActions sx={{display: "flex", justifyContent: "center"}}>
                            <Button size="small"
                                    sx={{fontSize: "1.2rem",
                                    padding: "0 20px",
                                    color: "black",
                                    borderColor: "black"}}
                            onClick={async () => {
                                if (!authUser)
                                    navigate("/login");
                                await addProductUnitToCart(`${authUser}_collection`, item.id!)

                            }}
                            >+</Button>
                            <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                0
                            </Typography>
                            <Button size="small"
                                    sx={{fontSize: "1.2rem",
                                        padding: "0 20px",
                                        color: "black",
                                        borderColor: "black"}}>-</Button>
                        </CardActions>
                    </Card>
                </Grid>
            )}
        </Grid>

    );
};

export default BreadProductsUser;