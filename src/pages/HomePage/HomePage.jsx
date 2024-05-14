import MovieList from "../../components/MovieList/MovieList"
import { getTrendingMovies } from '../../movies-api';
import { useState, useEffect } from 'react';

export default function HomePage() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
            try {
                const data = await getTrendingMovies();
                setMovies(data);
                console.log(data);
            } catch (error) {
                console.log('Error!');
            }
        };

        getMovies();
    }, []);

    return (
        <div>
            <h1>Trending today:</h1>
            {movies.length > 0 && <MovieList movies={movies} />}
        </div>
    )
}