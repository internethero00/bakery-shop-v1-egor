import Button from "@mui/material/Button";
import {useAppDispatch} from "../redux/hooks.ts";
import {logoutAction} from "../redux/slices/authSlice.ts";
import {useNavigate} from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch()
    return (
        <div>
            <Button variant={"contained"} onClick={() => {
                alert("you did logout");
                localStorage.clear()
                dispatch(logoutAction());
                navigate('/')
                window.location.reload();

            }}>
                Logout
            </Button>

        </div>
    );
};

export default Logout;