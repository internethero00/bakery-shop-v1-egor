import SignInForm from "../SignInForm.tsx";
import {useAppDispatch} from "../../redux/hooks.ts";
import {loginAction} from "../../redux/slices/authSlice.ts";
import type {LoginType} from "../../utils/shop-types.ts";


const Login = () => {
    const dispatch = useAppDispatch();
    const login = (info: LoginType) => {
        // console.log(JSON.stringify(info));
        dispatch(loginAction(info.email));
    }

    return (
        <div>
            <SignInForm singIn={login}/>
        </div>
    );
};

export default Login;