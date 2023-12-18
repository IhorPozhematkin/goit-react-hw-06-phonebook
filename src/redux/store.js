import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts';
import { filterReducer } from './filter';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const persistConfig = {
  key: 'contacts',
  storage,
};

const persistedReducer = persistReducer(persistConfig, contactsReducer);

const reducer = {
  contacts: persistedReducer,
  filter: filterReducer,
};

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
