import React from "react";
import {Button, Form, Input} from "antd";
import '../login/login.css'
import {useNavigate} from 'react-router-dom';


type FieldType = {
    username?: string;
    password?: string;
};

function Login() {
    const navigate = useNavigate();
    return (
        <div className={"loginBody"}>
            <div className={"loginDiv"}>
                <div className="login-content">
                    <h1 className={"login-title"}>用户登录</h1>
                    <Form
                        name="basic"
                        labelCol={{span: 6}}
                        wrapperCol={{span: 14}}
                        style={{maxWidth: 600}}
                        initialValues={{remember: true}}
                        // onFinish={onFinish}
                        // onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item<FieldType>
                            label="账号"
                            name="username"
                            rules={[{required: true, message: '请输入账号'}]}
                        >
                            <Input/>
                        </Form.Item>

                        <Form.Item<FieldType>
                            label="密码"
                            name="password"
                            rules={[{required: true, message: '请输入密码'}]}
                        >
                            <Input.Password/>
                        </Form.Item>

                        <Form.Item wrapperCol={{offset: 6, span: 14}}>
                            <Button type="primary" onClick={() => {
                                navigate('/pages/Index')
                            }}>
                                确定
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Login
