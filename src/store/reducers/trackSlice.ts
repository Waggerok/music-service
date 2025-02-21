import { PayloadAction } from '../../../node_modules/@reduxjs/toolkit/src/createAction';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../../API";

interface ITrack {
    id : number;
    title : string;
    author : string;
    image : string;
    audio : string;
}

interface ITrackState {
    tracks : ITrack[];
    loading : boolean;
    error : string | null;
}

const initialState : ITrackState = {
    tracks : [],
    loading : false,
    error : null
}

export const fetchTracks = createAsyncThunk("tracks/fetchTracks", async () => {
    const response = await axios.get(`${API}music/getMusic`);
    // console.log(response)
    return response.data.music;
});

const trackSlice = createSlice({
    name : 'tracks',
    initialState,
    reducers : {
        addTrack : (state,action : PayloadAction<ITrack>) => {
            state.tracks.push(action.payload);
        },
        deleteTrack : (state,action : PayloadAction<number>) => {
            state.tracks = state.tracks.filter((track) => track.id !== action.payload)
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchTracks.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchTracks.fulfilled, (state, action : PayloadAction<ITrack[]>) => {
                state.loading = false
                state.tracks = action.payload;
            })
            .addCase(fetchTracks.rejected,(state,action) => {
                state.loading = false;
                state.error = action.error.message || 'Ошибка при загрузке треков'
            })
    },
});

export const { addTrack, deleteTrack } = trackSlice.actions;
export default trackSlice.reducer;