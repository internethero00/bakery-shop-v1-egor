import Button from "@mui/material/Button";
import {useAppDispatch} from "../redux/hooks.ts";
import {deleteNicknameAction, logoutAction} from "../redux/slices/authSlice.ts";
import {useNavigate} from "react-router-dom";
import {getAuth, onAuthStateChanged} from "firebase/auth";

const Logout = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch()

    const deleteNickname = () => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user)
                dispatch(deleteNicknameAction())

        })
    }

    return (
        <div>
            <Button variant={"contained"} onClick={() => {
                alert("you did logout");
                localStorage.clear()
                dispatch(logoutAction());
                navigate('/')
                deleteNickname()
                // window.location.reload();

            }}>
                Logout
            </Button>

        </div>
    );
};

export default Logout;