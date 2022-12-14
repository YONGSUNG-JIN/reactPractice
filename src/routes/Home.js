import { useState, useEffect } from 'react';
import Movie from '../components/Movie';

function Home() {
    const [loading, setLoading] = useState(true)
    const [movies, setMovies] = useState([])
    const getMovies = async () => {
        const res = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`);
        const result = await res.json();
        setMovies(result.data.movies);
        setLoading(false);
    }
    useEffect(() => {
        getMovies();
    }, [])
    return <div>
        {loading ?
            <h1>Loading....</h1> :
            (<div>
                {movies.map((e) => (
                    <Movie
                        key={e.id}
                        id={e.id}
                        title={e.title}
                        summary={e.summary}
                        medium_cover_image={e.medium_cover_image}
                    />
                ))}
            </div>)
        }
    </div>
}

export default Home;