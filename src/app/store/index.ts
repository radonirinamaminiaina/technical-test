import { TypedUseSelectorHook, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import PushModule from "./PushModule";

const store = configureStore({
  reducer: {
    push: PushModule.reducer,
  },
});

export const appStore = store;
export type RootState = ReturnType<typeof appStore.getState>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;