import MovieCard from "../MovieCard/MovieCard"

export default function MovieList({ movies }) {
    return (
        <ul>
            {movies.map((movie) => {
                return <li key={movie.id}>
                    <MovieCard movie={movie} />
                </li>
            })}
        </ul>
    )
}

