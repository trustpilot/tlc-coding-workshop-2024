import { Link } from "react-router-dom";
import css from "./HeaderBlock.module.scss";


export function TopHeader({ title, addLinkBack }) {
    return (
        <div className={css.headerContainer}>
            <h1>
                {addLinkBack? <Link to="/">{" << back "}</Link>: ''}
                <br/><span> {title} </span>
            </h1>
        </div>
    )}
