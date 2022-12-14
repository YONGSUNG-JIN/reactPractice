import PropTypes from "prop-types";
import { Link } from "react-router-dom"

function Movie({id, title, summary, medium_cover_image}) {
    return <div>
        <h2><Link to={`/movie/${id}`}>{title}</Link></h2>
        <p>{summary}</p>
        <img src={medium_cover_image} alt={title}></img>
    </div>
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string, 
    summary: PropTypes.string,
    medium_cover_image : PropTypes.string
}

export default Movie;