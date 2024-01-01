import {Button, Container} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../stores/AuthSlice";

const Profile = () => {
    const { userInfo } = useSelector((state) => state.auth)
    const dispatch = useDispatch();
    return (
        <Container>
            <h1 className="text-center py-5 text-uppercase">HELLO {userInfo?.name}</h1>
            <p className="text-center">
                Birth: {userInfo?.birth}
            </p>
            <p className="text-center">
                Email: {userInfo?.email}
            </p>
            <div className="d-flex justify-content-center">
                <Button variant="primary" onClick={() => dispatch(logout())}>Logout</Button>
            </div>
        </Container>
    )
}
export default Profile