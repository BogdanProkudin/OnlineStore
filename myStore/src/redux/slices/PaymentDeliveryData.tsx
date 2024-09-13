import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { set } from "lodash";
import { act } from "react-dom/test-utils";

interface DeliveryInfo {
  Area: string;
  AreaDescription: string;
  AreaDescriptionRu: string;
  CityID: string;
  Delivery1: string;
  Delivery2: string;
  Delivery3: string;
  Delivery4: string;
  Delivery5: string;
  Delivery6: string;
  Delivery7: string;
  Description: string;
  DescriptionRu: string;
  IsBranch: string;
  PreventEntryNewStreetsUser: string;
  Ref: string;
  SettlementType: string;
  SettlementTypeDescription: string;
  SettlementTypeDescriptionRu: string;
  SpecialCashCheck: number;
}

interface PaymentDeliveryState {
  name: string;
  lastName: string;
  city: string;

  phoneNumber: string;
  isPhoneNumberValid: boolean;
  cityRef: string;
  citiesList: DeliveryInfo[];
  wareHouseList: any;
  selectedWareHouse: string;
  isPersonalFieldNotCompleted: boolean;
  isDeliveryFieldNotCompleted: boolean;
  isPersonalFieldShake: boolean;
  isDeliveryDataOpen: boolean;
  isDeliveryFieldShake: boolean;
  isUserDataOpen: boolean;
}

const initialState: PaymentDeliveryState = {
  name: "",
  lastName: "",
  phoneNumber: "",
  isPhoneNumberValid: false,
  city: "",
  cityRef: "",

  citiesList: [],
  wareHouseList: [],
  selectedWareHouse: "",
  isDeliveryDataOpen: true,
  isPersonalFieldNotCompleted: false,
  isPersonalFieldShake: false,
  isDeliveryFieldNotCompleted: false,
  isDeliveryFieldShake: false,
  isUserDataOpen: true,
};

const paymentDeliverySlice = createSlice({
  name: "paymentDeliveryInfo",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setLastName: (state, action) => {
      state.lastName = action.payload;
    },
    setPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
    },

    setCity: (state, action) => {
      state.city = action.payload;
    },
    setCityRef: (state, action) => {
      state.cityRef = action.payload;
    },
    setCitiesList: (state, action) => {
      state.citiesList = action.payload;
    },
    setWareHouseList: (state, action) => {
      state.wareHouseList = action.payload;
    },
    setSelectedWareHouse: (state, action: PayloadAction<string>) => {
      state.selectedWareHouse = action.payload;
    },
    setIsDeliveryDataOpen: (state, action: PayloadAction<boolean>) => {
      state.isDeliveryDataOpen = action.payload;
    },
    setIsUserDataOpen: (state, action: PayloadAction<boolean>) => {
      state.isUserDataOpen = action.payload;
    },
    setIsDeliveryFieldNotCompleted: (state, action: PayloadAction<boolean>) => {
      state.isDeliveryFieldNotCompleted = action.payload;
    },
    setIsPersonalFieldShake: (state, action: PayloadAction<boolean>) => {
      state.isPersonalFieldShake = action.payload;
    },
    setIsPersonalFieldNotCompleted: (state, action: PayloadAction<boolean>) => {
      state.isPersonalFieldNotCompleted = action.payload;
    },

    setIsDeliveryFieldShake(state, action: PayloadAction<boolean>) {
      state.isDeliveryFieldShake = action.payload;
    },
    setIsPhoneNumberValid: (state, action: PayloadAction<boolean>) => {
      state.isPhoneNumberValid = action.payload;
    },
  },
});

export const {
  setCity,
  setCitiesList,
  setSelectedWareHouse,
  setWareHouseList,
  setCityRef,
  setIsDeliveryDataOpen,
  setIsUserDataOpen,
  setLastName,
  setName,
  setPhoneNumber,
  setIsDeliveryFieldNotCompleted,
  setIsPersonalFieldNotCompleted,
  setIsPersonalFieldShake,
  setIsDeliveryFieldShake,
  setIsPhoneNumberValid,
} = paymentDeliverySlice.actions;
export default paymentDeliverySlice.reducer;
