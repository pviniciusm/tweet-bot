import { configureStore } from '@reduxjs/toolkit';
import persistStore from 'redux-persist/es/persistStore';

import { reducers } from './rootReducer';
// import { middleware, persistedReducers } from './persistor';

export const store = configureStore({
    reducer: reducers,
    // eslint-disable-next-line no-undef
    devTools: process.env.NODE_ENV === 'development',
});
