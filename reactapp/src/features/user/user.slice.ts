import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IApiUser } from './user.interfaces';

export interface UserState {
    user: IApiUser;
    time: string;
}

const initialState: UserState = {
    user: { name: 'Tim' },
    time: ''
};

export const userSlice = createSlice({
    name: 'person',
    initialState,
    reducers: {
        changeName: (state, action: PayloadAction<string>) => {
            state.user.name = action.payload;
        },
        changeTime: (state, action: PayloadAction<string>) => {
            state.time = action.payload;
        }
    }
});

// Exporting the actions
export const { changeName, changeTime } = userSlice.actions;

export default userSlice.reducer;