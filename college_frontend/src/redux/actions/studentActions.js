import axios from 'axios';
import {
  createStudentRequest,
  createStudentSuccess,
  createStudentFail
} from '../reducers/studentReducer';

export const createStudent = (studentData) => async (dispatch) => {
  try {
    dispatch(createStudentRequest());

    const res = await axios.post('http://localhost:8000/student/studentRegister', studentData);

    dispatch(createStudentSuccess(res.data));
  } catch (error) {
    dispatch(createStudentFail(error.response?.data?.message || error.message));
  }
};