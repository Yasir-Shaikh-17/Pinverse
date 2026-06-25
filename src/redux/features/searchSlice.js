import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({

    name: "search",
    initialState: {
        query: "",
        activeTab: "photos",
        results: [],
        loading: false,
        error: null
    },
    reducers: {
        setQuery(state, action) {
            state.query = action.payload
        },
        setActiveTabs(state, action) {
            state.activeTab = action.payload
        },
        setResults(state, action) {
            state.results = action.payload
            state.loading = false
        },
        setLoading(state, action) {
            state.loading = true
            state.error = false
        },
        setErrors(state, action) {
            state.error = action.payload
            state.loading = false
        },
        clearSearch(state) {
            state.results = []
        },
        clearHome (state) {
            state.query = "";
            state.results = [];
            state.error = null;
        }
    }

})

export const { setQuery, setActiveTabs, setResults, setLoading, setErrors, clearSearch, clearHome } = searchSlice.actions
export default searchSlice.reducer