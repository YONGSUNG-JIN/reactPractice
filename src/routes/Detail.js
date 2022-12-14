import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    const {id} = useParams();
    const [movieDetail, setMovieDetail] = useState("")

    useEffect(()=>{
        fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        .then(res => res.json())
        .then(json => setMovieDetail(json.data.movie))
    },[])
    return (
            <h1> Detail: {movieDetail.title} </h1>
    )
}

export default Detail;