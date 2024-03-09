import { Link } from "react-router-dom";
import css from "./AwardBlock.module.scss";
import PropTypes from 'prop-types';

export function AwardBlock({ award, film }) {
    return (
        <div className={css.container}>
            <p> {award.description} </p>
            <h2 id="html-section"> Winner: {award.winner.name} </h2>

            {film ?
                <div>
                    <h3>Film &#34;{film.name}&#34; (<Link to={film.imdbLink}>{film.imdbScore} imdb score</Link>)</h3>
                    <p>{film.description}</p>
                </div> : ''
            }
        </div>
    )}

AwardBlock.propTypes = {
    film: {
        name: PropTypes.string.isRequired,
        imdbLink: PropTypes.string.isRequired,
        imdbScore: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
    },
    award: {
        description: PropTypes.string.isRequired,
        winner: {
            name: PropTypes.string.isRequired
        }
    }
};