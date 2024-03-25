import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TopHeader } from "../components/HeaderBlock/HeaderBlock.jsx";
import { AwardBlock } from "../components/AwardBlock/AwardBlock.jsx";


export default function AwardPage() {
    const { awardId } = useParams();
    const [award, setAward] = useState(null);
    const [film, setFilm] = useState(null);

    useEffect(() => {
        fetch('/awards.json')
            .then(response => response.json())
            .then(data => {
                setAward(data.find(award => award.id === awardId))
            })
            .catch(error => console.error('Error fetching data:', error));
    }, [awardId]);

    useEffect(() => {
        if (award) {
            fetch('/films.json')
                .then(response => response.json())
                .then(data => {
                    setFilm(data.find(film => award.winner.filmId === film.id))
                })
                .catch(error => console.error('Error fetching data:', error));
        }
    }, [award]);

    return (
        <div>
            {award?
                <div>
                    <TopHeader title={`"${award.title}" Award`} />
                    <AwardBlock award={award} film={film} />
                </div> : <div> Data loading ... </div>}
        </div>
    )
}