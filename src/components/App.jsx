import React from 'react';
import GlobalStyles from './GlobalStyles';
import { MovieApp } from './App.styled';
import Header from './Header/Header';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <MovieApp>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews/>} />
        </Route>
        <Route />
        <Route path="*" element={<Home />} />
      </Routes>
      <GlobalStyles />
    </MovieApp>
  );
}
