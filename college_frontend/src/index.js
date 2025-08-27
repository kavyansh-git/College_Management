import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { StudentProvider } from './context/StudentContext'; 
import store from './redux/store';
import { CookiesProvider } from 'react-cookie';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FacultyProvider } from './context/FacultyContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <CookiesProvider>
            <FacultyProvider>
              <StudentProvider>
                <App />
              </StudentProvider>
            </FacultyProvider>
          </CookiesProvider>
      </Provider>
    <ToastContainer
      position="top-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      toastStyle={{
        backgroundColor: "rgba(0, 0, 0)", 
        color: "rgba(255, 255, 255)",
        boxShadow: "0 0 5px rgba(255, 255, 255, 0.7)",           
      }}
      />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
