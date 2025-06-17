import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

const ErrorPage = () => {

    const navigate = useNavigate();

    useEffect(() => {
        const [nav] = performance.getEntriesByType("navigation") as PerformanceNavigationTiming[];
        console.log(nav.type)
        if (nav?.type === "reload") {
            navigate("/", {replace: true});
        }
    }, [navigate]);

    return (
        <div>
            Error
        </div>
    );
};

export default ErrorPage;