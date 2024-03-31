import React, {useEffect, useState} from "react";
import {Menu} from "antd";
import Sider from "antd/es/layout/Sider";
import {UserOutlined} from "@ant-design/icons";
import {connect} from "react-redux";
import {LOGIN_DATA_CHANGE} from "../store/reducer";

type MyMenuItem = {
    label: string
}

function Aside(props: any) {
    const [collapsed, setCollapsed] = useState(false);
    const userData = props.userdata
    let str = props.str
    console.log('str=====>' + str)
    const [menuItems, setMenuItems] = useState<MyMenuItem[]>([]);

    const tempItemList: MyMenuItem[] = [];

    console.log('Aside')
    useEffect(() => {
        console.log('useEffect')
        // 这里的代码只会在组件的首次渲染时执行一次
        userData.data.menu.forEach((value: any, index: number) => {
            tempItemList.push({
                label: value.menuName
            })
        })
        setMenuItems(tempItemList);

    }, []); // 空依赖项数组
    return (
        <Sider collapsible={false} collapsed={collapsed} onCollapse={(value) => setCollapsed(!collapsed)}>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="vertical">
                <Menu.Item key={1} icon={<UserOutlined/>}>{"首页"}</Menu.Item>
                {menuItems.map((item, index) => (
                    <Menu.Item key={index + 2} icon={<UserOutlined/>}>{item.label}</Menu.Item>
                ))}
            </Menu>
        </Sider>
    )
}

/** state映射*/
const mapStateToProps = (state: any) => {
    return {
        userdata: state.userdata,
        str: state.str
    }
}

/** 派发*/
const mapDispatchToProps = (dispatch: any) => {
    return {
        changeUserData: (val: any) => {
            let action = {type: LOGIN_DATA_CHANGE, value: val}
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Aside)
