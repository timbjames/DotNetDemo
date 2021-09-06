import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '@state/redux-store';
import { IApiPeopleTools, IApiPerson } from './person.interfaces';
import PersonService from './person.service';

type Status = 'idle' | 'loading' | 'failed';

export interface PersonState {
    people: IApiPerson[];
    status: Status;
    tools: IApiPeopleTools | null;
}

const initialState: PersonState = {
    people: [],
    status: 'idle',
    tools: null
};

export const getPeopleAsync = createAsyncThunk(
    'people/getPeople',
    async (_, thunkApi) => {
        // Clear people initially
        thunkApi.dispatch(personSlice.actions.clearPeople());

        // Get new response
        const response = await PersonService.getPeople();

        if ((response as any).isAxiosError){
            return thunkApi.rejectWithValue('Opps');
        }

        // Return as reducer payload
        return response.data;
    }
);

export const getToolsAsync = createAsyncThunk(
    'people/getTools',
    async () => {
        const response = await PersonService.getTools();

        return response.data;
    }
);

export const personSlice = createSlice({
    name: 'person',
    initialState,
    reducers: {
        changeStatus: (state, action: PayloadAction<Status>) => {
            state.status = action.payload;
        },
        clearPeople: (state) => {
            state.people = [];
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getPeopleAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getPeopleAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.people = action.payload;
            })
            .addCase(getPeopleAsync.rejected, (state, action) => {
                state.status = 'idle';
                state.people = [];
                console.log(action.payload);
            })
            .addCase(getToolsAsync.pending, (state) => {
                //state.status = 'loading';
            })
            .addCase(getToolsAsync.fulfilled, (state, action) => {
                //state.status = 'idle';
                state.tools = action.payload;
            })
    }
});

// Custom thunk by hand
export const alternateState = (): AppThunk => (dispatch, getState) => {
    const currentStatus = getState().person.status;

    if (currentStatus === 'idle') {
        dispatch(personSlice.actions.changeStatus('loading'));
    } else {
        dispatch(personSlice.actions.changeStatus('idle'));
    }
};

// Exporting the actions
export const { clearPeople, changeStatus } = personSlice.actions;

export default personSlice.reducer;