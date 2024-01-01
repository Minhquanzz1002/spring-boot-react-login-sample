import {Suspense} from "react";
import {Spinner} from "react-bootstrap";
import {Route, Routes} from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import Home from "../views/Home";
import Login from "../views/Login";
import Profile from "../views/Profile";
import ProtectedRoute from "./ProtectedRoute";
import OAuth2RedirectHandler from "../views/OAuth2RedirectHandler";

const DefaultRoute = () => {
    return (
        <Suspense fallback={<Spinner animation="border" variant="primary"/>}>
            <Routes>
                <Route path="/login" name="Login" element={<Login/>}/>
                <Route path="/oauth2/redirect" element={<OAuth2RedirectHandler/>}/>
                <Route path="/" element={<DefaultLayout/>}>
                    <Route index name="Home" element={<Home/>}/>
                    <Route element={<ProtectedRoute/>}>
                        <Route path="/profile" name="Profile" element={<Profile/>}/>
                    </Route>
                </Route>
            </Routes>
        </Suspense>
    )
}
export default DefaultRoute