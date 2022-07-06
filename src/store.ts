import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

export const rootReducer = combineReducers({});

export type RootState = ReturnType<typeof rootReducer>;

const middleware = [thunk];

const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: true,
});

export default store;
