import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './redux/reducers/main';

const store = configureStore({
  reducer: rootReducer, // Pass the rootReducer here
});

export default store;