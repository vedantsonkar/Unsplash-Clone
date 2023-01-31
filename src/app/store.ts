import { configureStore } from '@reduxjs/toolkit';
import { fetchImageSlice } from '../features/un-splash/fetchImages';

export const store = configureStore({
    reducer: {
        [fetchImageSlice.reducerPath]: fetchImageSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(fetchImageSlice.middleware);
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
