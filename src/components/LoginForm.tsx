import React, {Dispatch, useState} from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import {rules} from "../utils/rules";
import {useDispatch} from "react-redux";
import {AuthActionCreators} from "../store/reducers/auth/action-creators";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";



const LoginForm: React.FC = () => {
    //was
    // const dispatch: Dispatch<any> = useDispatch()
    //became
    const {login} = useActions()

    const {error, isLoading} = useTypedSelector(state => state.auth);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onFinish = (values: any) => {
        console.log('Success:', values);
        //was
        // dispatch(AuthActionCreators.login(username, password))
        //became
        login(username, password);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    type FieldType = {
        username?: string;
        password?: string;
        remember?: string;
    };



return (
    <Form
        name="basic"
        labelCol={{span: 8}}
        wrapperCol={{span: 16}}
        style={{maxWidth: 600}}
        initialValues={{remember: true}}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
    >
        {error && <div style={{color: 'red'}}>{error}</div>}
        <Form.Item<FieldType>
            label="Username"
            name="username"
            rules={[rules.required('Please input your username!')]}
        >
            <Input value={username} onChange={(e)  => setUsername(e.target.value)}/>
        </Form.Item>

        <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[rules.required('Please input your password!')]}
        >
            <Input.Password value={password} onChange = {e => setPassword(e.target.value)}/>
        </Form.Item>

        <Form.Item<FieldType>
            name="remember"
            valuePropName="checked"
            wrapperCol={{offset: 8, span: 16}}
        >
            <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{offset: 8, span: 16}}>
            <Button type="primary" htmlType="submit" loading={isLoading}>
                LogIn
            </Button>
        </Form.Item>
    </Form>
    )

};

export default LoginForm;
