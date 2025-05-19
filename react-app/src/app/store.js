import { configureStore } from "@reduxjs/toolkit";
import dataSliceReducer from "../redux/dataSlice";


export default configureStore({
    reducer: {
       data: dataSliceReducer,
    },
    });