import {createSlice,nanoid} from '@reduxjs/toolkit'

const courseSlice = createSlice({
    name:'courses',
    initialState:{
        searchTerm:'',
        data: []
    },
    reducers:{
        addCourse(state,action){
             state?.data?.push({
                name: action.payload.name,
                description:action.payload.description,
                cost:action.payload.cost,
                id: nanoid(),
            })
        },
        deleteCourse(state,action){
          state.data = state.data.filter((course) => course.id !== action.payload)
        }
    }
})

export const {addCourse,deleteCourse} = courseSlice.actions
export default courseSlice.reducer