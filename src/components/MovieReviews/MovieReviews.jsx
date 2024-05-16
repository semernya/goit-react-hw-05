import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../movies-api';
import css from './MovieReviews.module.css'

export default function MovieReviews() {

    const { movieId } = useParams();
    const [movieReviews, setMovieReviews] = useState([]);

    useEffect(() => {
        const fetchMovieCreditsById = async () => {
            try {
                const data = await getMovieReviews(movieId);
                console.log(data.results);
                setMovieReviews(data.results);
            } catch (error) {
                alert('Error occured! Please try again.')
                setMovieReviews([]);
            }
        }

        fetchMovieCreditsById();
    }, [movieId])

    return (
        <ul className={css.list}>
            {movieReviews.map(({ id, author, content }) => {
                return <li key={id} className={css.listItem}>
                    <p className={css.title}>Author: {author}</p>
                    <p className={css.text}>{content}</p>
                </li>
            })}
        </ul>
    )
}