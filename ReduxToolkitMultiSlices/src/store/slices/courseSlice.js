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
        updateCourse(state, action) {
            const { id, name, description, cost } = action.payload;
            const course = state.data.find((course) => course.id === id);
            if (course) {
              course.name = name;
              course.description = description;
              course.cost = cost;
            }
          },
        deleteCourse(state,action){
          state.data = state.data.filter((course) => course.id !== action.payload)
        }
    }
})

export const {addCourse,updateCourse,deleteCourse} = courseSlice.actions
export default courseSlice.reducer