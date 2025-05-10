import {LoadingSpinnerStyle} from "./Style";

const LoadingSpinner = ({message}) => {
    return (
        <LoadingSpinnerStyle>
            <div className="spinner"></div>
            {message && <p className="message">{message}</p>}
        </LoadingSpinnerStyle>
    )
}

export default LoadingSpinner;