import {ChangeEvent, FC, FormEvent, useState} from "react";
import {Box, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {ProductType} from "../../utils/shop-types.ts";

type Props = {
    submitFn: (product: ProductType) => void;
}

const AddProductForm: FC<Props> = ({submitFn}) => {
    const initialProduct: ProductType = {
        category: "cake", cost: 10, img: "", title: 'MyCake', unit: 'ea'
    }

    function imageHandler(e:ChangeEvent<HTMLInputElement>){
        setTempProduct({...tempProduct, img: e.target.value})
    }

    function handleUnits(e: SelectChangeEvent) {
        setTempProduct({...tempProduct, unit: e.target.value})
    }


    const [tempProduct, setTempProduct] = useState(initialProduct)

    function submitHandler(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        submitFn(tempProduct)
    }

    function resetHandler() {
        setTempProduct(initialProduct)
    }

    return (
        <Box sx={{
            width: "100vw",
            minHeight: "100vh",
            backgroundColor: "rgba(0,0,0,0.5)",
            position: "absolute",
            top: '0',
            left: '0'

        }}>
            <Box onClick={(e) => {e.stopPropagation()}}  sx={{
                    width: "70%",
                    minHeight: "70%",
                    margin: "100px auto",
                    padding: '15px',
                    borderRadius: '5px',
                    backgroundColor: "whitesmoke"}}>
                <form onSubmit={submitHandler} onReset={resetHandler}>
                    <TextField label={'image URL'} variant={'outlined'} fullWidth={true}
                               onChange={imageHandler}/>
                    <Box>
                        <img src={tempProduct.img} alt={""} width={"100%"}/>
                    </Box>
                    <InputLabel id="demo-simple-select-label">Unit</InputLabel>
                    <Select
                        labelId="units"
                        id="inits"
                        value={tempProduct.unit}
                        label="Unit"
                        onChange={handleUnits}
                    >
                        <MenuItem value={"ea"}>EA</MenuItem>
                        <MenuItem value={"piece"}>Piece</MenuItem>
                        <MenuItem value={"pack"}>Pack</MenuItem>
                    </Select>
                    <Box>
                        <Button type={'submit'} variant={'outlined'}>Submit</Button>
                        <Button type={'reset'} variant={'outlined'}>Reset</Button>
                    </Box>
                </form>
            </Box>
        </Box>
    );
};

export default AddProductForm;