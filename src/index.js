import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styles/reset.css"
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './components/header/Header';
import Introduction from './components/introduction/Introduction';
import Services from './components/services/Services';
import Project from './components/projects/Projects';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Introduction />
    <Services />
    <Project />
  </React.StrictMode>
);


