import { createSlice } from "@reduxjs/toolkit";

const initialState = [{
    name:"Raju"
}];

const UserSlice = createSlice({
    name: "users",
    initialState: initialState,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload)
        }
    }
})

export default UserSlice.reducer
export const {addUser} = UserSlice.actions 