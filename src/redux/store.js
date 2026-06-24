import { configureStore } from "@reduxjs/toolkit";
import searcReducer from "./features/searchSlice";
import collectionReducer from "./features/collectionSlice"

export const store = configureStore({

    reducer: {
        search: searcReducer,
        collection: collectionReducer,
    }

})