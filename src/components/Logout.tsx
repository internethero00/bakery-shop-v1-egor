import Button from "@mui/material/Button";
import {useAppDispatch} from "../redux/hooks.ts";
import {logoutAction} from "../redux/slices/authSlice.ts";

const Logout = () => {
    const dispatch = useAppDispatch()
    return (
        <div>
            <Button variant={"contained"} onClick={() => { alert("you did logout") ;
                dispatch(logoutAction())}}>
                Logout
            </Button>

        </div>
    );
};

export default Logout;