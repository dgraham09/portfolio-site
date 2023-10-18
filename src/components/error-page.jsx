import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error)

    return (
        <div id="error-page">
            <h1>Sorry!</h1>
            <p>An unexpected error has occured</p>
            <p>
                <i>{error.status || error.message}</i>
            </p>
        </div>
    )

}

export default ErrorPage;