import {createSlice} from "@reduxjs/toolkit";

type AuthState = {
    authUser: string,
    authName: string,
}

const initialState: AuthState = {
    authUser: "",
    authName: "",
}


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginAction: (state, action) => {
            state.authUser = action.payload || ""
        },
        logoutAction: (state) => {
            state.authUser = "";
        },
        putNicknameAction: (state, action) => {
            state.authName = action.payload || "ADMIN";
        },
        deleteNicknameAction: (state) => {
            state.authName = ''
        }
    }
})

export const { loginAction, logoutAction, putNicknameAction, deleteNicknameAction } = authSlice.actions;
export const authReducer =  authSlice.reducer;