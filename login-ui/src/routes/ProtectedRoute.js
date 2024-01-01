import {NavLink, Outlet} from "react-router-dom";
import {useSelector} from "react-redux";
import {Container} from "react-bootstrap";

const ProtectedRoute = () => {
    const { userToken } = useSelector((state) => state.auth)
    if (!userToken) {
        return (
            <Container>
                <h1 className="text-center pt-5">401 - Unauthorized</h1>
                <p className="text-center">You are not authorized to access this page.</p>
                <div className="d-flex justify-content-center">
                    <NavLink to="/login" className="btn btn-primary">Login</NavLink>
                </div>
            </Container>
        )
    }
    return <Outlet/>
}

export default ProtectedRoute