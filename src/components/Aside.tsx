import React, {useEffect, useState} from "react";
import {Menu} from "antd";
import Sider from "antd/es/layout/Sider";
import {UserOutlined} from "@ant-design/icons";
import {useSelector} from "react-redux";
import {LoginData} from "../redux/action";

type MyMenuItem = {
    label: string
}

function Aside() {
    const [collapsed, setCollapsed] = useState(false);
    const userData = useSelector((state:LoginData) => state.userData);

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

export default Aside
