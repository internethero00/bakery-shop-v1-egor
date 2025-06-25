
import {type SignUpData} from "../../utils/shop-types.ts";
import {registerWithEmailAndPassword} from "../../firebase/firebaseAuthService.ts";
import {useNavigate} from "react-router-dom";
import SignUpForm from "../SignUpForm.tsx";

const Registration = () => {

    const navigate = useNavigate();
    // const signUpSubmit = (data: SignUpData) => {
    //     console.log(JSON.stringify(data));
    // }
    const signUpWithEmail = async (data: SignUpData) => {
        const userEmailPass: SignUpData = {
            name: data.name,
            email: data.email,
            password: data.password,
        }
        try {
           await registerWithEmailAndPassword(userEmailPass);
           navigate('/login');
        }
        catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <SignUpForm submitFunc={signUpWithEmail}/>
        </div>
    );
};

export default Registration;