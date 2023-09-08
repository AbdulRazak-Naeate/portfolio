import { createSlice } from '@reduxjs/toolkit'

const initialState ={
    section:'section0'
}

const navbarSlice = createSlice({
    name:'navbar',
    initialState,
    reducers:{

        moveToSection: (state,action) => {
            state.section = action.payload
        }
    }
})

export const {moveToSection} = navbarSlice.actions
export default navbarSlice.reducer
