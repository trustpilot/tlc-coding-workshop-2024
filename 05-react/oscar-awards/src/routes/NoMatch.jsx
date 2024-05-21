import {Link} from "react-router-dom";

export default function NoMatch() {
    return (
        <div>
            <h1> 404 </h1>
            <p>
                Sorry, this page doesn&#39;t exists. (<Link to={"/"}>return to main</Link>)
            </p>
        </div>
    )}