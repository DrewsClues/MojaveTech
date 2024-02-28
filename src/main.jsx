import React from 'react';
import ReactDOM from 'react-dom'; 
import App from './App.jsx';
import './index.css';
import Full_Page from './components/full-page.jsx';
import Nav_bar from './components/navbar.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav_bar/>
    <Full_Page />
  </React.StrictMode>,
);
