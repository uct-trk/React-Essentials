import {createSlice} from '@reduxjs/toolkit'

const formSlice = createSlice({
    name:'form',
    initialState:{
        name:'',
        description:'',
        cost:0
    },
    reducers:{
        changeName(state,action){
            state.name = action.payload
        },
        changeDesc(state,action){
            state.description = action.payload
        },
        changePrice(state,action){
            state.cost = action.payload
        }
    }
})
export const {changeName, changeDesc, changePrice} = formSlice.actions
export default formSlice.reducer