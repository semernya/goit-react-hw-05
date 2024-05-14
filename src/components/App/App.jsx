import { Routes, Route } from 'react-router-dom';
import Layout from '../Layout/Layout';
import HomePage from '../../pages/HomePage/HomePage';
import MoviesPage from '../../pages/MoviesPage/MoviesPage';
import MovieDetailsPage from '../../pages/MovieDetailsPage/MovieDetailsPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import "./App.css";
import { getMovieById } from '../../movies-api';

export default function App() {

  getMovieById(823464);

  return (
    <Layout>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/movies' element={<MoviesPage />} />

        <Route path='/movies/:movieId' element={<MovieDetailsPage />}>
          {/* <Route path='/movies/:movieId/cast' element={<MovieCast />} />
          <Route path='/movies/:movieId/reviews' element={<MovieReviews />} /> */}
        </Route>

        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </Layout>
  )
}
