import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "../redux/dataSlice";

export default configureStore({
    reducer: {
       data: dataSlice,

    },
    });