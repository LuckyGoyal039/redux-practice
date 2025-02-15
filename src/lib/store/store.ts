import { configureStore } from "@reduxjs/toolkit";

export const makeStore = () => {
    return configureStore({
        reducer: {
        }
    })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootStore = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']