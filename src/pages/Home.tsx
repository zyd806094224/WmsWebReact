import React, {useRef, useState} from "react";
import {Layout} from "antd";
import {Content, Footer, Header} from "antd/es/layout/layout";
import {MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons";
import Aside from "../components/Aside";
function Home(props:any){

    const [asideState, setAsideState] = useState(true); //true是侧边栏展开 默认展开
    function sideChangeNotifyHome(state: boolean){
        setAsideState(state)
    }
    const childRef = useRef(null)
    const asideEvent = () => {
        // @ts-ignore
        childRef.current && childRef.current.asideChange()
    }

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Aside onRef={childRef} sideChangeNotifyHome={sideChangeNotifyHome}>

            </Aside>
            <Layout>
                <Header style={{display: 'flex',height: 60, padding: 0, background: '#ffffff'}}>
                    {asideState && <MenuFoldOutlined style={{marginLeft: 10,alignContent: 'center',cursor: 'pointer'}} onClick={asideEvent}>

                    </MenuFoldOutlined >}
                    {!asideState && <MenuUnfoldOutlined style={{marginLeft: 10,alignContent: 'center',cursor: 'pointer'}} onClick={asideEvent}>

                    </MenuUnfoldOutlined>}
                    <span style={{flex: 1,textAlign: 'center',fontSize: 34}}>欢迎来到仓库管理系统</span>
                </Header>

                <Content style={{ margin: '0 16px' }}>

                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );

}

export default Home
