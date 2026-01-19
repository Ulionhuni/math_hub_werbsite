import React, {useContext, useState} from 'react';
import {Container, Row, Col, Card, Form, Button, InputGroup} from 'react-bootstrap';
import {NavLink, useNavigate, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, MATH_PAGE_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import backgroundImage from '../assets/math.jpg';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {login, registration} from "../http/userAPI";

const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const navigate = useNavigate()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false);
    const [show, setShow] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent page reload

        if (isLoading) return; // Prevent multiple submissions

        setIsLoading(true);

        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);
            }
            user.setUser(data);
            user.setIsAuth(true);
            navigate(MATH_PAGE_ROUTE);
        } catch(e) {
            //console.log('Error:', e);
            alert(e.response?.data?.message || 'Something went wrong');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div style={{
            //marginTop: '0px',
            overflowY: 'auto',
            height: '100vh',
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed'
        }}>
            <section style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                padding: '20px 0',
                backgroundColor: 'rgba(0, 0, 0, 0.5)'
            }}>
                <Container>
                    <Row className="justify-content-center">
                        <Col md={6}>
                            <Card className="p-4">
                                <h2 className="text-center mb-4">{isLogin ? 'Welcome back friend!' : 'Welcome friend!'}</h2>
                                <Form
                                    className="d-flex flex-column"
                                    onSubmit={handleSubmit}
                                >
                                    <Form.Group className="mb-3" controlId="formEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            className="mb-3"
                                            placeholder="Enter your email..."
                                            value={email}
                                            onChange={e => setEmail(e.target.value)}
                                            disabled={isLoading}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formPassword">
                                        <Form.Label>Password</Form.Label>
                                        <InputGroup>
                                            <Form.Control
                                                className="mb-3"
                                                placeholder="Enter your password..."
                                                type={show ? "text" : "password"}
                                                value={password}
                                                onChange={e => setPassword(e.target.value)}
                                                disabled={isLoading}
                                            />
                                            <Button
                                                className="mb-3"
                                                variant="outline-secondary"
                                                onClick={() => setShow(!show)}
                                                type="button"
                                            >
                                                {show ? "Hide" : "Show"}
                                            </Button>
                                        </InputGroup>
                                    </Form.Group>
                                    <Row className = "d-flex justify-content-between mt-3 pl-3 pr-3">
                                        {isLogin ?
                                            <div className="mt-4 text-center">
                                                Not registered yet? <NavLink to={REGISTRATION_ROUTE}>Registration</NavLink>
                                            </div>
                                            :
                                            <div className="mt-4 text-center">
                                                Have account? <NavLink to={LOGIN_ROUTE}>Login</NavLink>
                                            </div>
                                        }
                                        <Button
                                            variant={"outline-success"}
                                            type = "submit"
                                            disabled={isLoading}
                                        >
                                            {isLoading
                                                ? 'Please wait...'
                                                : (isLogin ? 'Login' : 'Registration')
                                            }
                                        </Button>
                                    </Row>
                                </Form>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Features Section */}
            <section style={{
                padding: '80px 0',
                backgroundColor: 'rgba(0, 0, 0, 0.6)'
            }}>
                <Container>
                    <h2 className="text-center mb-5 text-white">What can you find here and why is it valuable?</h2>
                    <Row>
                        {[
                            'Education structure and comments',
                            'Motivational content',
                            'Community interaction',
                            'Valuable materials',
                            'Interactive exercises',
                            'Regular Updates'
                        ].map((feature, index) => (
                            <Col md={4} key={index} className="mb-4">
                                <Card className="h-100">
                                    <Card.Body className="text-center">
                                        <Card.Title>{feature}</Card.Title>
                                        <Card.Text>
                                            Detailed information about {feature.toLowerCase()} 
                                            and how it benefits your application.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Info Section */}
            <section style={{
                padding: '80px 0',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                color: 'white'
            }}>
                <Container>
                    <Row className="align-items-center">
                        <Col md={6}>
                            <h2>Get Started Today</h2>
                            <p className="lead">
                                Join thousands of users who trust our platform
                                for their authentication needs.
                            </p>
                            <button className="btn btn-light btn-lg mt-3">
                                Learn More
                            </button>
                        </Col>
                        <Col md={6}>
                            <Card className="bg-light text-dark p-4">
                                <h3>Quick Stats</h3>
                                <ul className="list-unstyled">
                                    <li className="mb-2">✓ 99.9% Uptime</li>
                                    <li className="mb-2">✓ 24/7 Support</li>
                                    <li className="mb-2">✓ Global Coverage</li>
                                    <li>✓ Enterprise Ready</li>
                                </ul>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Footer */}
            <footer style={{
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                color: 'white',
                padding: '40px 0'
            }}>
                <Container>
                    <Row>
                        <Col md={4}>
                            <h4>About</h4>
                            <p>Secure and reliable authentication solutions for your applications.</p>
                        </Col>
                        <Col md={4}>
                            <h4>Links</h4>
                            <ul className="list-unstyled">
                                <li><a href="#" className="text-white text-decoration-none">Documentation</a></li>
                                <li><a href="#" className="text-white text-decoration-none">Support</a></li>
                                <li><a href="#" className="text-white text-decoration-none">Terms of Service</a></li>
                            </ul>
                        </Col>
                        <Col md={4}>
                            <h4>Contact</h4>
                            <p>Email: support@example.com</p>
                            <p>Phone: (555) 123-4567</p>
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col className="text-center">
                            <small>&copy; 2025 Your Company. All rights reserved.</small>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </div>
    );
});

export default Auth;