import React, {FC} from 'react';
import {Card, Layout, Row} from "antd";
import LoginForm from "../components/LoginForm";

const Login:FC = () => {
    return (
        <Layout style={{background: 'linear-gradient(#68EACC 0%, #497BE8 100%'}}>
            <Row justify="center" align="middle" className="h100">
                <Card style={{width: '500px'}}>
                    <LoginForm />
                </Card>
            </Row>
        </Layout>
    );
};

export default Login;
