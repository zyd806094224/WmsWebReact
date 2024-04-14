import React, {useEffect, useImperativeHandle, useState} from "react";
import {Menu} from "antd";
import Sider from "antd/es/layout/Sider";
import {UserOutlined} from "@ant-design/icons";
import {connect} from "react-redux";
import {LOGIN_DATA_CHANGE} from "../store/reducer";
import {useNavigate} from "react-router-dom";

type MyMenuItem = {
    label: string,
    routePath: string
}

interface Props {
    sideChangeNotifyHome: (state: boolean) => void
}


function Aside(props: Props | any) {
    const navigateTo = useNavigate();
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
                label: value.menuName,
                routePath: value.menuComponent
            })
        })
        setMenuItems(tempItemList);

    }, []); // 空依赖项数组

    //给父组件调用的函数
    useImperativeHandle(props.onRef, () => ({
        asideChange
    }))

    //父组件触发侧边栏状态改变事件
    function asideChange() {
        setCollapsed(!collapsed)
        props.sideChangeNotifyHome(collapsed)
    }

    const toNavigateView = (route: string): any => {
        console.log(route)
        if(route.includes('Home')){
            navigateTo('')
        }else if(route.includes('AdminMange')){
            navigateTo('adminMange')
        }else if(route.includes('UserMange')){
            navigateTo('userManage')
        }else if(route.includes('StorageMange')){
            navigateTo('storageMange')
        }else if(route.includes('GoodsTypeMange')){
            navigateTo('goodsTypeMange')
        }else if(route.includes('GoodsMange')){
            navigateTo('goodsMange')
        }else if(route.includes('RecordMange')){
            navigateTo('recordMange')
        }

    }

    return (
        <Sider collapsible={false} collapsed={collapsed} onCollapse={(value) => asideChange()}>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="vertical">
                <Menu.Item onClick={() => {toNavigateView('Home')}} key={1} icon={<UserOutlined/>}>{"首页"}</Menu.Item>
                {menuItems.map((item, index) => (
                    <Menu.Item onClick={() => {toNavigateView(item.routePath)}} key={index + 2} icon={<UserOutlined/>}>{item.label}</Menu.Item>
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
