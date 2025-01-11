import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: {} = {
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (_state, _action: PayloadAction) => {
    }
  }
});

export const { } = userSlice.actions;
const userReducer = userSlice.reducer;
export default userReducer;
