import { createSlice } from '@reduxjs/toolkit';

export const Question9Reducer = createSlice({
    name: 'question9',
    initialState: {
        answer: '',
        color: '',
    },
    reducers: {
        setColor: (state) => {
            state.color = '!bg-blue';
        },
        setAnswer: (state, action) => {
            state.answer = action.payload;
        },
        clearTile: (state) => {
            state.answer = '';
            state.color = '';
        }
    },
});

// The first argument is the name of the actions
export const { setAnswer, setColor, clearTile } = Question9Reducer.actions;
// The second argument is an object that describes the reducers
export default Question9Reducer.reducer;