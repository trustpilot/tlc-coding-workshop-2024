import {TopHeader} from "../components/HeaderBlock/HeaderBlock.jsx";
import {Link} from "react-router-dom";

export default function MainPage() {
    return (
        <div>
            <TopHeader title={"React Frontend App"} activePage={"main"}/>

            <div className="container">
                <ul>
                    <li><Link to="https://react.dev/">React</Link> - allows to build a powerful dynamic frontend
                        applications
                    </li>
                    <li><Link to="https://vitejs.dev/guide/">Vite</Link> - helps to a build different versions of
                        frontend applications (we are now talking about React
                        + Javascript, but there can be multiple combinations, like vue + typescript) faster and easier
                        by
                        handling all the package dependencies.
                    </li>
                </ul>

                <p>
                    In Trustpilot we are mostly using React and typescript combination.
                    Starting a new app:
                </p>

                <ul>
                    <li>Install <Link to="https://nodejs.org/en">Node</Link></li>
                    <li>
                        Create a new project: <code>npm create vite@latest</code>
                        <ul>
                            <li>Choose name for the folder for your app, in example here it will
                                be &#34;oscar-awards&#34;</li>
                            <li>Choose React and Javascript as your tools to create an application</li>
                            <li>Open the folder <code>cd oscar-awards/</code></li>
                            <li>Install all packages defined as dependencies for the app to start by running <code>npm
                                install</code>
                            </li>
                            <li>Run <code>npm run dev</code> and open the suggested page http://localhost:5173/</li>
                        </ul>
                    </li>
                </ul>

                Packages used in the oscar-awards example:
                <pre>
                    <code>
                        npm install -s react-router-dom <br/>
                        npm install -s sass <br/>
                        npm install -s prop-types
                    </code>
                </pre>
            </div>
        </div>)
}