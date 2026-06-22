import { configureStore } from "@reduxjs/toolkit";
import searcReducer from "./features/searchSlice";

export const store = configureStore({

    reducer: {
        search: searcReducer,
        
    }

})