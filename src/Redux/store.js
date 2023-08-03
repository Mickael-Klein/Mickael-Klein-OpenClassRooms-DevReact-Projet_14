import { createSlice, configureStore } from "@reduxjs/toolkit";
import { employees } from "../Data/mockEmployee";
import { states } from "../Data/mockState";
import { department } from "../Data/mockDepartment";

const employeeDataSlice = createSlice({
  name: "employeeData",
  initialState: employees,
  reducers: {
    addEmployee: (state, action) => {
      state.push(action.payload);
    },
  },
});

const appDataSlice = createSlice({
  name: "appData",
  initialState: { states, department },
  reducers: {},
});

const userInteractionSlice = createSlice({
  name: "userInteraction",
  initialState: {
    page: null,
    pageTitle: null,
  },
  reducers: {
    updatePageLocation: (state, action) => {
      state.page = action.payload.page;
      state.pageTitle = action.payload.pageTitle;
    },
  },
});

export const store = configureStore({
  reducer: {
    employeeData: employeeDataSlice.reducer,
    appData: appDataSlice.reducer,
    userInteraction: userInteractionSlice.reducer,
  },
});
