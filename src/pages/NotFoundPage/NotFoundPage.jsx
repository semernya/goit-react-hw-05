import { Link } from "react-router-dom";

export default function NotFoundPage() {
    return (
        <div>
            <p>Oops! Something is wrong. Please follow back to Home page!</p>
            <p>
                <Link to='/'>Go!</Link>
            </p>
        </div>
    )
}