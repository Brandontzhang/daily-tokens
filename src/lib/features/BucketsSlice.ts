import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Bucket } from "../../types";

const initialState: { loading: boolean, error?: string, buckets: Bucket[] } = {
  loading: false,
  error: "",
  buckets: []
};

const fetchBuckets = createAsyncThunk('buckets',
  async (bucketId) => {
    console.log(bucketId);
    return [];
  }
)

const bucketsSlice = createSlice({
  name: 'buckets',
  initialState,
  reducers: {
    addToken: (state, action: PayloadAction<{ bucketId: string, tokenPercentage: number }>) => {
      const { bucketId, tokenPercentage } = action.payload;

      const bucket = state.buckets.find(b => b.id === bucketId);
      if (!bucket) { return; }

      if (tokenPercentage != 100) {
        bucket.completedTokens += (bucket.incompleteToken + tokenPercentage) > 100 ? 1 : 0;
        bucket.incompleteToken = (bucket.incompleteToken + tokenPercentage) % 100;
      }
    },
    updateBucket: (state, action: PayloadAction<Bucket>) => {
      const updatedBucket = action.payload;

      const bucket = state.buckets.find(b => b.id === updatedBucket.id);
      if (!bucket) { return; }

      bucket.name = updatedBucket.name;
      bucket.description = updatedBucket.description;
      bucket.tokenType = updatedBucket.tokenType;

      // TODO: If the token type changes... how to recalculate old tokens?
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBuckets.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBuckets.fulfilled, (state, action) => {
        state.loading = false;
        state.buckets = action.payload;
      })
      .addCase(fetchBuckets.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { addToken, updateBucket } = bucketsSlice.actions;
export { fetchBuckets };
const bucketsReducer = bucketsSlice.reducer;
export default bucketsReducer;
