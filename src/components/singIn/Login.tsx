import SignInForm from "../SignInForm.tsx";
import {useAppDispatch} from "../../redux/hooks.ts";
import {loginAction, putNicknameAction} from "../../redux/slices/authSlice.ts";
import type {LoginType} from "../../utils/shop-types.ts";
import {useNavigate} from "react-router-dom";
import {login} from "../../firebase/firebaseAuthService.ts";
import {getAuth, onAuthStateChanged} from "firebase/auth";

const Login = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    // const submitFn = (info: LoginType) => {
    //     // console.log(JSON.stringify(info));
    //     localStorage.setItem("authorization", info.email);
    //     navigate('/');
    //     window.location.reload();
    //     dispatch(loginAction(info.email));
    // }

    const putNickname = () => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user)
                dispatch(putNicknameAction(user.displayName))

        })
    }

    const loginWithFirebase = async (loginData: LoginType) => {
        try {
            const email = await login(loginData);
            localStorage.setItem("authorization", String(email));
            dispatch(loginAction(email));
            putNickname();
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <SignInForm singIn={loginWithFirebase}/>
        </div>
    );
};

export default Login;