import SignInForm from "../SignInForm.tsx";
import {useAppDispatch} from "../../redux/hooks.ts";
import {loginAction} from "../../redux/slices/authSlice.ts";
import type {LoginType} from "../../utils/shop-types.ts";
import {useNavigate} from "react-router-dom";


const Login = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const login = (info: LoginType) => {
        // console.log(JSON.stringify(info));
        dispatch(loginAction(info.email));
        localStorage.setItem("authorization", info.email);
        navigate('/');
        window.location.reload();
    }

    return (
        <div>
            <SignInForm singIn={login}/>
        </div>
    );
};

export default Login;