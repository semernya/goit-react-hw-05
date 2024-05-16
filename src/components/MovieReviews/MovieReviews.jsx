import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../movies-api';

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
        <ul>
            {movieReviews.map(({ id, author, content }) => {
                return <li key={id}>
                    <p>Author: {author}</p>
                    <p>{content}</p>
                </li>
            })}
        </ul>
    )
}