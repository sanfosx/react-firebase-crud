import React from 'react';
import './App.css';
import Links from './components/Links';
import LinkForm from './components/LinkForm';
import './firebaseConfig'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
   <div className='container p-10'>
      <div className='row'>
      <Links><LinkForm/></Links>
      </div>
   </div>
     
  
  );
}

export default App;
