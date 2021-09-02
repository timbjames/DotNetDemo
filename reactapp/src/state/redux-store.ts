import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { reducer as toastrReducer } from 'react-redux-toastr';

import personReducer from '../features/person/slice';

// Here I would add other redux state
export const store = configureStore({
    reducer: {
        person: personReducer,
        toastr: toastrReducer
    }
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, null, Action<any>>;
export default store;
