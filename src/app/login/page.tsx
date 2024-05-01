'use client'

import React from 'react';
import { Button, Checkbox, Form, Input, message } from 'antd';

const Login = () => {

    type FieldType = {
        username?: string;
        password?: string;
        remember?: boolean;
    };

    const onFinish = (values: FieldType) => {
        // Simulate login validation (replace with your actual validation logic)
        console.log(values);
        const { username, password } = values;
        if (username === 'admin' && password === 'password') {
            // Login successful
            console.log('Login successful:', values);
            message.success('Login successful');
        } else {
            // Login failed
            console.log('Login failed:', values);
            message.error('Login failed');
        }
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
        message.error('Please fill in all required fields');
    };

    

    return (
        <div className='flex justify-center mt-40'>
            <Form
                className='w-4/5 mx-auto'
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{ offset: 8, span: 16 }}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Login
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Login;
