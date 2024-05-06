import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {TopHeader} from "../components/HeaderBlock/HeaderBlock.jsx";

export default function AwardsPage() {
    const [awardsData, setAwardsData] = useState(null);

    useEffect(() => {
        fetch('/awards.json')
            .then(response => response.json())
            .then(data => {setAwardsData(data)})
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <TopHeader title={"The 95th Academy Award | 2023"} />
            <div className="background">
                <ul className={"awards"}>
                    {awardsData ? awardsData.map((award, index) => (
                        <li key={index}><Link to={`/awards/${award.id}`}> {award.title} </Link></li>
                    )) : 'No awards data'}
                </ul>
            </div>
        </div>
    )
}