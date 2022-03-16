import {IErrorProps} from "~/types/IRoot";

export default function Error({error}: IErrorProps) {
    return (
        <div>
            <h1>Error</h1>
            <p>{error.message}</p>
        </div>
    );
}