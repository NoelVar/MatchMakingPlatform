import { Link } from "react-router-dom"

const PageNotFound = () => {
    return (
        <div className="outer-container">
            <div className="not-found-container">
                <h1 className="E404">404</h1>
                <h2 className="E404-msg">Oops! Page Not Found!</h2>
                <p className="E404-help">The address may have been typed incorrectly.</p>
                <p className="E404-help">The address might be broken.</p>
                <Link to='/'>Back to Home</Link>
            </div>
        </div>
    )
}

export default PageNotFound