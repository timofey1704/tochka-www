import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  tracks: [],
}

export const fetchTrack = createAsyncThunk(
  'tracks/fetchTrack',
  async ({ url, data }, thunkAPI) => {
    try {
      const res = await axios.post(url, data)
      return res.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
  }
)

const tracksSlice = createSlice({
  name: 'tracks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTrack.fulfilled, (state, action) => {
      state.tracks.push(action.payload)
    })
  },
})

export const selectTracks = (state) => state.tracks.tracks

export default tracksSlice.reducer
