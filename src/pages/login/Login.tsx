import React from "react";
import {Button, Checkbox, Form, FormProps, Input} from "antd";
import '../login/login.css'


type FieldType = {
    username?: string;
    password?: string;
};


const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

export default class Login extends React.Component {

    render() {
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
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
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
                                <Button type="primary" htmlType="submit">
                                    确定
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }

}
