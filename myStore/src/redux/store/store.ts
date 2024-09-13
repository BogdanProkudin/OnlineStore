import { configureStore } from "@reduxjs/toolkit";
import paymentDeliverySlice from "../slices/PaymentDeliveryData";
const store = configureStore({
  reducer: {
    paymentDeliveryInfo: paymentDeliverySlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
