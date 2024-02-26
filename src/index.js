import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styles/reset.css"
import './index.css';
import Header from './components/header/Header';
import Introduction from './components/introduction/Introduction';
import Services from './components/services/Services';
import Project from './components/projects/Projects';
import Contact from './components/contact/Contact';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Introduction />
      <Services />
      <Project />
      <Contact />
    </BrowserRouter>
  </React.StrictMode >
);


