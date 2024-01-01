import {Alert, Button, Col, Container, Form, Image, Row, Spinner, Stack} from "react-bootstrap";
import image from "../assets/img/login-image.png";
import {Facebook, Github, Google} from "react-bootstrap-icons";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {afterOAuth2Login, loginAsync} from "../stores/AuthSlice";
import {useNavigate} from "react-router-dom";
import {GITHUB_AUTH_URL, GOOGLE_AUTH_URL} from "../constants";

const Login = () => {
    const [email, setEmail] = useState('john@gmail.com');
    const [password, setPassword] = useState('john1234');

    // redux state
    const {loading, error} = useSelector((state) => state.auth);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLoginEvent = (e) => {
        e.preventDefault();
        let userCredentials = {email, password};
        dispatch(loginAsync(userCredentials)).then((result) => {
            if (result.payload) {
                setEmail('');
                setPassword('');
                navigate('/profile');
            }
        });
    }

    return (
        <Container className="py-5">
            <Row>
                <Col xs={12} md={6}>
                    <h1 className="h2 text-center">LOGIN</h1>
                    <Stack gap={4}>
                        <Form onSubmit={handleLoginEvent}>
                            {
                                error && (
                                    <Alert variant="danger" dismissible>
                                        Incorrect username or password.
                                    </Alert>
                                )
                            }
                            <Form.Group className="mb-3" controlId="loginForm-Email">
                                <Form.Label>Email:</Form.Label>
                                <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@gmail.com" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="loginForm-Password">
                                <Form.Label>Password:</Form.Label>
                                <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" type="submit" className="w-100" disabled={loading}>
                                {loading ? (
                                        <><Spinner animation="border" variant="light" size="sm" className="me-2"/>Loading...</>
                                ) : 'Sign In'}
                            </Button>
                        </Form>
                        <p className="text-center text-muted">OR</p>
                        <Stack gap={2}>
                            <Button variant="dark" href={GITHUB_AUTH_URL}>
                                <Github/>
                                <span className="ms-3">CONTINUE WITH GITHUB</span>
                            </Button>
                            <Button style={{backgroundColor: "#3B5998"}} href="/">
                                <Facebook/>
                                <span className="ms-3">CONTINUE WITH FACEBOOK</span>
                            </Button>
                            <Button variant="danger" href={GOOGLE_AUTH_URL}>
                                <Google/>
                                <span className="ms-3">CONTINUE WITH GOOGLE</span>
                            </Button>
                        </Stack>
                    </Stack>
                </Col>
                <Col xs={12} md={6} className="px-3 py-5">
                    <Image src={image} fluid className="pt-5"></Image>
                </Col>
            </Row>
        </Container>
    )
}
export default Login