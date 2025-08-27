import { configureStore } from '@reduxjs/toolkit';
import studentReducer from './reducers/studentReducer';

const store = configureStore({
  reducer: {
    studentCreate: studentReducer
  }
});

export default store;
