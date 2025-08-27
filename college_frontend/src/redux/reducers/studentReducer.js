import { createSlice } from '@reduxjs/toolkit';

const studentSlice = createSlice({
  name: 'studentCreate',
  initialState: {
    loading: false,
    student: null,
    error: null
  },
  reducers: {
    createStudentRequest: (state) => {
      state.loading = true;
    },
    createStudentSuccess: (state, action) => {
      state.loading = false;
      state.student = action.payload;
      state.error = null;
    },
    createStudentFail: (state, action) => {
      state.loading = false;
      state.student = null;
      state.error = action.payload;
    }
  }
});

export const {
  createStudentRequest,
  createStudentSuccess,
  createStudentFail
} = studentSlice.actions;

export default studentSlice.reducer;
