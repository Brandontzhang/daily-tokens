import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: {} = {
};

const bucketsSlice = createSlice({
  name: 'buckets',
  initialState,
  reducers: {
    setUser: (_state, _action: PayloadAction) => {
    }
  }
});

export const { } = bucketsSlice.actions;
const bucketsReducer = bucketsSlice.reducer;
export default bucketsReducer;
