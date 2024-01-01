import {Navigate, useParams, useSearchParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {afterOAuth2Login} from "../stores/AuthSlice";

const OAuth2RedirectHandler = () => {
    const [searchParams] = useSearchParams();
    const dispathch = useDispatch();
    const accessToken = searchParams.get('access_token');
    const refreshToken = searchParams.get('refresh_token');
    if (refreshToken && accessToken) {
        const tokenObject = {
            access_token: accessToken,
            refresh_token: refreshToken
        };
        localStorage.setItem("tokens", JSON.stringify(tokenObject));
        dispathch(afterOAuth2Login());
        return <Navigate to="/profile"/>
    } else {
        return <Navigate to="/login"/>
    }

}
export default OAuth2RedirectHandler;