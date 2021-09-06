import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { reducer as toastrReducer } from 'react-redux-toastr';

import personReducer from '@features/person/person.slice';
import userReducer from '@features/user/user.slice';

// Here I would add other redux state
export const store = configureStore({
    reducer: {
        person: personReducer,
        toastr: toastrReducer,
        user: userReducer
    }
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, null, Action<any>>;
export default store;
