import {Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useGetUserDetailsQuery} from "../../app/services/auth/authService";
import {useEffect} from "react";
import {setCredentials} from "../../stores/AuthSlice";

const Header = () => {
    const { userInfo } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const {data, isFetching } = useGetUserDetailsQuery('userDetails', {
        pollingInterval: 900000,
    })

    useEffect(() => {
        if (data) {
            dispatch(setCredentials(data))
        }
    }, [data, dispatch]);

    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">REACT APP</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/profile" className="nav-link">Profile</NavLink>
                    </Nav>
                    <Nav>
                        <NavLink to="/login" className="nav-link">Login</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default Header