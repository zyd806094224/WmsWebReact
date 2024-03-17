import React, {useState} from "react";
import {Menu, MenuProps} from "antd";
import Sider from "antd/es/layout/Sider";
import {UserOutlined} from "@ant-design/icons";

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('首页', '1', <UserOutlined/>)
];

function getMenuList() {
    let data = Array()
    data.forEach((value, index) => {
        items.push(value)
    })
}

function Aside() {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Sider collapsible={false} collapsed={collapsed} onCollapse={(value) => setCollapsed(!collapsed)}>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items}/>
        </Sider>
    )
}

export default Aside
