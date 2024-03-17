import React from "react";
import {Layout} from "antd";
import Aside from "../components/Aside";
import {Content, Footer, Header} from "antd/es/layout/layout";

function Home(props:any){

    console.log('home....')

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Aside/>
            <Layout>
                <Header style={{ padding: 0, background: '#ff0000' }} />

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
