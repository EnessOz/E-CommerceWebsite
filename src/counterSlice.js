import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
    loading: false,
    productList: [],
    filteredList: [],
    cardList: [],
    totalPrice: 0,


};
export const getProducts = createAsyncThunk("fetchData", async () => {
    const response = await fetch("https://fakestoreapi.com/products")
    const data = await response.json()
    return data;
});


const firmSlice = createSlice({
    name: "products",
    initialState: initialState,
    reducers: {
        men: (state) => {
            state.filteredList = state.productList.filter((item) => item.category === "men's clothing")
        },
        woman: (state) => {
            state.filteredList = state.productList.filter((item) => item.category === "jewelery")
        },
        children: (state) => {
            state.filteredList = state.productList.filter((item) => item.category === "electronics")
        },
        addCard: (state, action) => {
            const itemId = action.payload;
            const selectedProduct = state.productList.find(item => item.id === itemId);
            state.cardList.push(selectedProduct);
            state.totalPrice = 0;
            state.cardList.forEach((item) => {
                state.totalPrice += item.price;
            });
        },
        removeCard: (state, action) => {
            const itemId = action.payload;
            const updatedCardList = state.cardList.filter((item) => item.id !== itemId);
            state.cardList = updatedCardList;

            state.totalPrice = 0;
            state.cardList.forEach((item) => {
                state.totalPrice += item.price;
            });
        },
        removeAll: (state) => {
            state.cardList = []
            state.totalPrice = 0;
            state.cardList.forEach((item) => {
                state.totalPrice += item.price;
            });
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.loading = true;
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.productList = action.payload
            })

            .addCase(getProducts.rejected, (state) => {
                state.loading = false;
            })
    }
});
export const { men, woman, children, addCard, removeCard, removeAll } = firmSlice.actions
export default firmSlice.reducer 