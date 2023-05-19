import { configureStore } from "@reduxjs/toolkit";
import quesAnsReducer from "../quesAns/quesAnsSlice";

export const store = configureStore({
  reducer: {
    quesAns: quesAnsReducer,
  },
});
