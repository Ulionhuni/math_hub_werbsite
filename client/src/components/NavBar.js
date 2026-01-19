import React, {useContext} from 'react';
import {Button, Nav, Navbar} from 'react-bootstrap';
import {Link, useNavigate} from "react-router-dom";
import {Context} from "../index";
import {MATH_PAGE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate();
    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }
    return (
        <Navbar variant="dark" style={{
            backgroundColor: 'transparent',
            overflow: 'hidden',
            flexWrap: 'wrap',
            whiteSpace: 'normal',
            margin: 0,
            padding: 0
        }}>
            <div style={{ 
                display: 'flex',
                minWidth: 'max-content',
                gap: '1rem',
                padding: '0 2rem'
            }}>
                <Navbar.Brand href="/">UK society</Navbar.Brand>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"} onClick={() => navigate(LOGIN_ROUTE)}>Authorization</Button>
                    </Nav>
                    :
                    <Nav>
                        <Nav.Link as={Link} to={LOGIN_ROUTE}>Authorization</Nav.Link>
                        <Nav.Link as={Link} to={MATH_PAGE_ROUTE}>Mathematics</Nav.Link>
                        <Nav.Link as={Link} to="/economics">Economics</Nav.Link>
                        <Nav.Link as={Link} to="/physics">Physics</Nav.Link>
                        <Nav.Link as={Link} to="/chemistry">Chemistry</Nav.Link>
                        <Nav.Link as={Link} to="/biology">Biology</Nav.Link>
                        <Nav.Link as={Link} to="/history">History</Nav.Link>
                        <Nav.Link as={Link} to="/geography">Geography</Nav.Link>
                    </Nav>

                }
            </div>
        </Navbar>
    );
});

export default NavBar;