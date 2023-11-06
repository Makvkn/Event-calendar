import React, {Dispatch} from 'react';
import {Layout, Menu, Row} from "antd";
import {useNavigate} from "react-router-dom";
import {RouteNames} from "../router";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {AuthActionCreators} from "../store/reducers/auth/action-creators";
import {useDispatch} from "react-redux";
import {useActions} from "../hooks/useActions";

const Navbar = () => {
    const router = useNavigate()
    const {isAuth, user} = useTypedSelector(state => state.auth)
    // const dispatch: Dispatch<any> = useDispatch()
    const {logout} = useActions();
    return (
        <Layout.Header>
            <Row justify={"end"}>
                { isAuth
                ?
                        <Menu theme='dark' mode='horizontal' selectable={false}>
                            <Menu.Item style={{color: 'white'}} key={2}>{user.username}</Menu.Item>
                            {/*<Menu.Item onClick = {() => dispatch(AuthActionCreators.logout())}*/}
                            <Menu.Item onClick = {logout}
                                       key = {1}>logout</Menu.Item>
                        </Menu>
                :
                    <Menu theme='dark' mode='vertical'  selectable={false}>
                        <Menu.Item onClick = {() => router(RouteNames.LOGIN)}
                                   style = {{position: 'relative', top: '5px'}}
                                   key = {1}>Login</Menu.Item>
                    </Menu>
                }
            </Row>

        </Layout.Header>
    );
};

export default Navbar;
