import {Descriptions, DescriptionsProps} from "antd";
import {useEffect} from "react";
import {connect} from "react-redux";

function Home(props: any, state: any) {

    useEffect(() => {
        // console.log(props.userdata.toString())
    })

    const getSex = (): string => {
        if (props.userdata.data.user.sex === '1') {
            return '男'
        }
        return '女'
    }

    const getRole = () => {
        if (props.userdata.data.user.roleId == 0) {
            return '超级管理员'
        } else if (props.userdata.data.user.roleId == 1) {
            return '管理员'
        } else {
            return '用户'
        }
    }

    const items: DescriptionsProps['items'] = [
        {
            key: '1',
            label: '账号',
            children: props.userdata.data.user.name,
        },
        {
            key: '2',
            label: '电话',
            children: props.userdata.data.user.phone,
        },
        {
            key: '3',
            label: '性别',
            children: getSex(),
        },
        {
            key: '4',
            label: '角色',
            children: getRole(),
        }
    ];

    return (
        <div style={{flexDirection: 'column', width: '100%', height: '100%'}}>
            <Descriptions title="个人中心" column={2} bordered items={items}/>
        </div>
    )
}

/** state映射*/
const mapStateToProps = (state: any) => {
    return {
        userdata: state.userdata
    }
}

export default connect(mapStateToProps, null)(Home)
