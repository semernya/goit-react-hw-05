import { Link } from "react-router-dom";


export default function MovieCard({ movie }) {
    return (
        <Link to={`/movies/${movie.id}`}>
            <p>{movie.title}</p>
        </Link>
    )
}