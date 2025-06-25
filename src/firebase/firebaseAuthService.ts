import {
    signOut,
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword, updateProfile
} from 'firebase/auth'

import type {LoginType, SignUpData} from "../utils/shop-types.ts";
import {auth} from '../configurations/fireBase-config.ts'


const loginWithEmail = async (data: LoginType) => {
    await signInWithEmailAndPassword(auth, data.email, data.password)
    console.log(auth.currentUser)
    return data.email
}

const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider()
    const result = await signInWithPopup(auth, provider)
    const user = result.user
    console.log(auth.currentUser)
    return Promise.resolve(user.email)
}


export const login = async (data: LoginType) => {
    return data.email === "GOOGLE" ? loginWithGoogle() : loginWithEmail(data)
}

export const registerWithEmailAndPassword = async (data: SignUpData) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
        const user = userCredential.user;

        if (user) {
            await updateProfile(user, {
                displayName: data.name ?? "unknown"
            });
            console.log(user);
        }

        return data.email;
    } catch (error) {
        console.error("error: ", error);
        throw error;
    }
}

export const exit = async () => {
    await signOut(auth)
}