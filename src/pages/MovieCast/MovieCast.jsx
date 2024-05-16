import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from "../../movies-api"

export default function MovieCast() {

    const { movieId } = useParams();
    const [movieCredits, setMovieCredits] = useState([]);

    useEffect(() => {
        const fetchMovieCreditsById = async () => {
            try {
                const data = await getMovieCredits(movieId);
                console.log(data.cast);
                setMovieCredits(data.cast);
            } catch (error) {
                alert('Error occured! Please try again.')
                setMovieCredits([]);
            }
        }

        fetchMovieCreditsById();
    }, [])

    return (
        <ul>
            {movieCredits.map(({ id, name, profile_path, character }) => {
                return <li key={id}>
                    <img src={`https://image.tmdb.org/t/p/w200/${profile_path}`} alt={name} />
                    <p>{name}</p>
                    <p>Character: {character}</p>
                </li>
            })}
        </ul>
    )
}