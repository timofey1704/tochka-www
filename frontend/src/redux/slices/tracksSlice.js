import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { setError } from './errorSlice'

const initialState = {
  tracks: [],
  isLoadingViaAPI: false,
}

export const fetchTrack = createAsyncThunk(
  'tracks/fetchTrack',
  async ({ url, data }, thunkAPI) => {
    try {
      const res = await axios.post(url, data)
      return res.data
    } catch (error) {
      thunkAPI.dispatch(setError(error.message))
      return thunkAPI.rejectWithValue(error.response.data)
    }
  }
)

const tracksSlice = createSlice({
  name: 'tracks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrack.pending, (state) => {
        state.isLoadingViaAPI = true
      })
      .addCase(fetchTrack.fulfilled, (state, action) => {
        state.isLoadingViaAPI = false

        state.tracks.push(action.payload)
      })
      .addCase(fetchTrack.rejected, (state) => {
        state.isLoadingViaAPI = false
      })
  },
})

export const selectTracks = (state) => state.tracks.tracks
export const selectIsLoadingViaAPI = (state) => state.tracks.isLoadingViaAPI

export default tracksSlice.reducer
