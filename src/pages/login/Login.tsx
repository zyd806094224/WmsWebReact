import React, {useRef} from "react";
import {Button, Form, Input, message} from "antd";
import '../login/login.css'
import {useNavigate} from 'react-router-dom';


type FieldType = {
    no?: string;
    password?: string;
};

function Login() {
    const navigate = useNavigate();
    const loginForm = useRef(null);

    const handleSubmit = async (values: any) => {
        try {
            const response = await fetch('http://localhost:8088/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });
            const data = await response.json();
            if (response.ok) {
                console.log(data)
                // 处理登录成功后的逻辑，比如跳转页面等
                if (data.code === 200) {
                    message.success(data.msg);
                    navigate('/pages/Home')
                } else {
                    message.error(data.msg)
                }
            } else {
                message.error(data.msg);
            }
        } catch (error) {
            console.error('登录请求失败:', error);
            message.error('登录失败，请稍后再试！');
        } finally {

        }
    };


    return (
        <div className={"loginBody"}>
            <div className={"loginDiv"}>
                <div className="login-content">
                    <h1 className={"login-title"}>用户登录</h1>
                    <Form
                        name='login-form'
                        ref={loginForm}
                        labelCol={{span: 6}}
                        wrapperCol={{span: 14}}
                        style={{maxWidth: 600}}
                        initialValues={{remember: true}}
                        onFinish={handleSubmit}
                        // onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item<FieldType>
                            label="账号"
                            name="no"
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
                            <Button type="primary" htmlType={"submit"}>
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
