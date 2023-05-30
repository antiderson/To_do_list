import { Link, useRouteError } from "react-router-dom";
import './style.css';

type ErrorResponse = {
    data: any;
    status: number;
    statusText: string;
    message?: string;
};

export default function NotFound() {
    const error = useRouteError() as ErrorResponse;
    console.error(error);

    return (
        <section className='error_page'>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <Link to="/">
                <button
                    className='button'
                >
                    Voltar
                </button>
            </Link>
        </section>
    );
}