import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Import BrowserRouter
import './App.css';
import Navbar from './Navbar'; // Import your Navbar component
import Home from './Home';
import Movies from './Movies';
import LoginForm from './Components/LoginForm';
import MovieDetails from './MovieDetails';

function App() {

  return (
    <BrowserRouter>
      <div className="app">
        
        <Routes>
          {
            <Route
              index
              element={
                <>
                  <LoginForm />
                </>
              }
            />
          }
          <Route path="/movies" element={
            <>
            <Navbar />
              <Movies />
            </>
          } />
          <Route path="/Home" element={
            <>
            <Navbar />
              <Home />
            </>
          } />
           <Route path="/movie/:id" element={
            <>
            <Navbar />
              <MovieDetails/>
            </>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
