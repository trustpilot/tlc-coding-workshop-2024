import { Link } from "react-router-dom";
import css from "./HeaderBlock.module.scss";
import PropTypes from 'prop-types';


export function TopHeader({ activePage, title }) {
    return (
        <div className={css.headerContainer}>
            <h1>
                <span> {title} </span>
            </h1>
            <nav>
                <ul>
                    <li className={activePage === 'main'? "active" : ""}><Link to="/">Home</Link></li>
                    <li className={activePage === 'awards'? "active" : ""}><Link to="/awards">Awards</Link></li>
                </ul>
            </nav>
        </div>
    )}

TopHeader.propTypes = {
    activePage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};