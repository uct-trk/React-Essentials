import {createSlice} from '@reduxjs/toolkit'
import { addCourse } from './courseSlice'

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
    },
    extraReducers(builder){
        builder.addCase(addCourse,(state,action) => {
            state.name ='',
            state.description='',
            state.cost=0
        })
    }
})
export const {changeName, changeDesc, changePrice} = formSlice.actions
export default formSlice.reducer