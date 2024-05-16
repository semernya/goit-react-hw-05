import { Link } from "react-router-dom";
import css from './MovieCard.module.css'

export default function MovieCard({ movie: { id, title } }) {
    return (
        <div className={css.linkBox}>
            <Link to={`/movies/${id}`} className={css.link}>
                <p>{title}</p>
            </Link>
        </div>
    )
}