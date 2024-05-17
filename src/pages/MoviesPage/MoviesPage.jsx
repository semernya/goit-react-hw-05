import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchForm from "../../components/SearchForm/SearchForm"
import { getMovieByQuery } from "../../movies-api";
import css from './MoviesPage.module.css'

export default function MoviesPage() {

    const [query, setQuery] = useState('');
    const [list, setList] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSearch = async (newQuery) => {
        setQuery(newQuery);
    }

    const handleError = (errorState) => {
        setError(errorState);
    }

    useEffect(() => {
        if (query === '') {
            return;
        }
        const fetchMovieByQuery = async () => {
            try {
                setLoading(true);
                const data = await getMovieByQuery(query);
                console.log(data);
                setList(data);
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        }

        fetchMovieByQuery();
    }, [query])

    return (
        <div>
            <SearchForm onSubmit={handleSearch} onError={handleError} />
            <ul className={css.list}>
                {
                    list.map((item) => {
                        return (
                            <li key={item.id} className={css.listItem}>
                                <Link to={`/movies/${item.id}`} className={css.link}>{item.title}</Link>
                            </li>
                        )
                    })}
            </ul>
        </div >
    )
}