

export default function MovieInfo({ movie: { title, tagline, genres, overview, vote_average } }) {
    return (
        <div>
            {/* <img src="" alt="" /> */}
            <div>
                <h1>{title}</h1>
                <p>{tagline}</p>
                <p>Rating: {vote_average}</p>

                <h2>Overwiew</h2>
                <p>{overview}</p>

                <h3>Genres:</h3>
                {/* <p>{genres}</p> */}

            </div>
        </div>
    )
}