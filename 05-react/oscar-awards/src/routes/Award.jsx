import { useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom";
import { TopHeader } from "../components/HeaderBlock/HeaderBlock.jsx";


export default function Award() {
    const { awardId } = useParams();

    const [award, setAward] = useState(null);
    const [film, setFilm] = useState(null);

    useEffect(() => {
        fetch(`/awards/${awardId}.json`)
            .then(response => response.json())
            .then(data => { setAward(data)})
            .catch(error => console.error('Error fetching data:', error));
    }, [awardId]);

    useEffect(() => {
        if (award) {
            fetch(`/films/${award.winner.filmId}.json`)
                .then(response => response.json())
                .then(data => {setFilm(data)})
                .catch(error => console.error('Error fetching data:', error));
        }
    }, [award]);

    return (
        <div>
            {award?
                <div>
                    <TopHeader title={`"${award.title}" Award`} addLinkBack/>
                    <div className={"container"}>
                        <p> {award.description} </p>
                        <h2 id="html-section"> Winner: {award.winner.name} </h2>
                        {film ?
                            <div>
                                <h3>Film &#34;{film.name}&#34; (<Link to={film.imdbLink}>{film.imdbScore} imdb
                                    score</Link>)</h3>
                                <p>{film.description}</p>
                            </div> : ''
                        }
                    </div>
                </div> : <div> Data loading ... </div>}
        </div>
    )
}