import { createSlice } from "@reduxjs/toolkit";

const quesAnsSlice = createSlice({
    name: 'quesAns',
    initialState: {
        question: null,
        answer: null
    },
    reducers: {
        userAnswer: {
            reducer(state, action) {
                state.answer = action.payload
            },
            prepare(selectedOption) {
                return { 
                    payload: {
                        selectedOption
                }
            }
            }
        }
    }
})

export const allAns = state => state.quesAns.answer
export const { userAnswer } = quesAnsSlice.actions

export default quesAnsSlice.reducer