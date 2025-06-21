import {
    signOut,
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword
} from 'firebase/auth'

import type {LoginType} from "../utils/shop-types.ts";
import {auth} from '../configurations/fireBase-config.ts'


const loginWithEmail = async (data: LoginType) => {
    await signInWithEmailAndPassword(auth, data.email, data.password)
    return data.email
}

const loginWithGoogle = async () => {
    return Promise.resolve("")
}

export const login = async (data: LoginType) => {
    return data.email === "GOOGLE" ? loginWithGoogle() : loginWithEmail(data)
}