import React from 'react';
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {NavLink, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/const";

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}>
            <Card style={{width: 600, borderRadius: 10}} className="p-5">
                <h2 className="m-auto">{isLogin ? 'Authorization' : 'Registration'}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Email"
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Password"
                    />
                    <Row className="d-flex justify-content-between mt-3">
                        {isLogin ?
                            <div>
                                Don't have an account,<NavLink to={REGISTRATION_ROUTE}>register</NavLink>
                            </div>
                            :
                            <div>
                                Do you have an account?<NavLink to={LOGIN_ROUTE}> Sign In</NavLink>
                            </div>
                        }
                        <Button
                            className="mt-3"
                            variant={"outline-success"}
                        >{isLogin ? 'Login' : 'Registration'}

                        </Button>
                    </Row>

                </Form>
            </Card>

        </Container>
    );
};

export default Auth;