import { createSlice } from "@reduxjs/toolkit";



const initialState={
    
    overview: "Love nudie magazines, free beer, bowling, and nudie bars.Lets Rock.",
    isEdit:false 
}

const summarySlice=createSlice({
    name:"summary",
    initialState,
    reducers:{
        editInfo: (state, action) => {
            const input_name = action.payload.name;
            const input_value = action.payload.value;
         
             state[input_name] =input_value;
         },
        toggle:(state,action)=>{
            state.isEdit=!state.isEdit;
        }

    }

})

export default summarySlice.reducer;
export const {editInfo,toggle}=summarySlice.actions;