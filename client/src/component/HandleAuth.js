import { useLocation } from "@reach/router"
import { parse } from "query-string"
import { useEffect } from "react"

const HandleAuth = () => {
    const location = useLocation()
    const params = parse(location.search);

    useEffect(() => {
        if (params.error) {
            console.log(params.error);
        } else if (params.code) {
            localStorage.setItem("muzic-spotify-user-token", params.code);

            var lastURL = localStorage.getItem("muzic-last-url")
            if (lastURL) {
                window.location.href = lastURL;
            } else {
                window.location.href = "http://localhost:3000/";
            }
        }

    }, [])

    return (
        <div>
            Continue to Muzic
        </div>
    )
}

export default HandleAuth
