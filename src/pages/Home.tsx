import React, {useRef, useState} from "react";
import {Dropdown, Layout, MenuProps, Modal, Space} from "antd";
import {Content, Footer, Header} from "antd/es/layout/layout";
import {DownOutlined, MenuFoldOutlined, MenuUnfoldOutlined, SmileOutlined} from "@ant-design/icons";
import Aside from "../components/Aside";
import {connect} from "react-redux";
import {useNavigate} from "react-router-dom";

function Home(props: any) {

    const navigate = useNavigate();
    const userData = props.userdata
    console.log('Home--=====>' + userData.data.user.name)
    const [asideState, setAsideState] = useState(true); //true是侧边栏展开 默认展开
    const [isModalOpen, setIsModalOpen] = useState(false);
    const childRef = useRef(null)

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
        navigate('/')
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    function sideChangeNotifyHome(state: boolean) {
        setAsideState(state)
    }

    const asideEvent = () => {
        // @ts-ignore
        childRef.current && childRef.current.asideChange()
    }

    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <span>个人中心</span>
            ),
            onClick: toUserCenter
        },
        {
            key: '2',
            label: (
                <span>退出登录</span>
            ),
            onClick: loginOut
        }
    ]

    function toUserCenter() {
        navigate('/pages/Home')
    }

    function loginOut() {
        showModal()
    }

    return (
        <Layout style={{minHeight: '100vh'}}>
            <Aside onRef={childRef} sideChangeNotifyHome={sideChangeNotifyHome}>

            </Aside>
            <Layout>
                <Header style={{display: 'flex', height: 60, padding: 0, background: '#ffffff'}}>
                    {asideState && <MenuFoldOutlined style={{marginLeft: 10, alignContent: 'center', cursor: 'pointer'}}
                                                     onClick={asideEvent}>

                    </MenuFoldOutlined>}
                    {!asideState &&
                    <MenuUnfoldOutlined style={{marginLeft: 10, alignContent: 'center', cursor: 'pointer'}}
                                        onClick={asideEvent}>

                    </MenuUnfoldOutlined>}
                    <span style={{flex: 1, textAlign: 'center', fontSize: 34}}>欢迎来到仓库管理系统</span>

                    <div style={{marginRight: 20}}>
                        <Dropdown menu={{items}}>
                            <Space>
                                {userData.data.user.name}
                                <DownOutlined/>
                            </Space>
                        </Dropdown>
                    </div>

                    <Modal title="提示" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                        <p>确定要退出登录？</p>
                    </Modal>
                </Header>

                <Content style={{margin: '0 16px'}}>

                </Content>
                <Footer style={{textAlign: 'center'}}>
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
}

/** state映射*/
const mapStateToProps = (state: any) => {
    return {
        userdata: state.userdata,
        str: state.str
    }
}

export default connect(mapStateToProps, null)(Home)
