import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./store/slices/counterSlice";
import authReducer from "./store/slices/loginSlice";
// import darkModeReducer from "./store/slices/darkModeSlice";

const rootReducer = combineReducers({
  counter: counterReducer,
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
