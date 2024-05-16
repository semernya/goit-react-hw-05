import { useState, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import { getMovieById } from '../../movies-api';
import MovieInfo from '../../components/MovieInfo/MovieInfo';

export default function MovieDetailsPage() {

    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchMovieById = async () => {
            try {
                setLoading(true);
                const data = await getMovieById(movieId);
                setMovie(data);
            } catch (error) {
                setError(true);
                alert('Error occured! Please try again.')
                setMovie(null);
            } finally {
                setLoading(false);
            }
        }

        fetchMovieById();
    }, [movieId])

    return (
        <div>
            {loading && <p>Page is loading. Please wait...</p>}

            <Link to='/'>Go back</Link>
            {movie && <MovieInfo movie={movie} />}
            <br />
            <p>Additional information:</p>
            <ul>
                <li>
                    <Link to='cast'>Cast</Link>
                </li>
                <li>
                    <Link to='reviews'>Reviews</Link>
                </li>
            </ul>
            <Outlet />
        </div>
    )
}