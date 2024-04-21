import {Button, Input, Layout, message, Select, Table, TableProps} from "antd";
import {useEffect, useState} from "react";


interface DataType{

}

const AdminMange = (props: any) => {

    const [pageSize,setPageSize] = useState(10)
    const [pageNum,setPageNum] = useState(1)
    const [name,setName] = useState('')
    const [sex,setSex] = useState('')
    const [roleId,setRoleId] = useState('1')
    const [tableData,setTableData] = useState([])

    useEffect(() => {
        loadPost()
    })

    const loadPost = async () => {
        let params = {
            'pageSize': pageSize,
            'pageNum': pageNum,
            'param' : {
                'name': name,
                'sex' : sex,
                'roleId' : roleId
            }
        }
        try {
            const response = await fetch('http://localhost:8088/user/listPageCC2', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(params),
            });
            const data = await response.json();
            if (response.ok) {
                console.log(data)
                if (data.code === 200) {
                    setTableData(data.data)
                } else {
                    message.error(data.msg)
                }
            } else {
                message.error(data.msg);
            }
        } catch (error) {
            message.error('请求失败，请稍后再试！');
        } finally {

        }
    }

    const columns: TableProps<DataType>['columns'] = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: '账号',
            dataIndex: 'no',
            key: 'no',
        },
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: '性别',
            dataIndex: 'sex',
            key: 'sex',
        },
        {
            title: '角色',
            dataIndex: 'roleId',
            key: 'roleId',
        },
        {
            title: '电话',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: '操作',
            dataIndex: 'operate',
            key: 'operate',
        }
    ];

    return(
        <Layout style={{flexDirection: 'column', width: '100%'}}>
            <Layout style={{flexDirection: 'row',marginTop: '5px'}}>
                <Input placeholder={'请输入名字'} style={{width: '200px',height: '30px' }}></Input>
                <Select
                    // defaultValue=""
                    style={{ width: '200px',height: '30px' ,marginLeft: '5px'}}
                    allowClear
                    placeholder={'请选择性别'}
                    options={[{ value: '男', label: '男' },{ value: '女', label: '女' }]}
                />
                <Button type="primary" style={{marginLeft: '5px'}}>查询</Button>
                <Button style={{marginLeft: '5px'}}>重置</Button>
                <Button style={{marginLeft: '5px'}}>新增</Button>
            </Layout>

            <Table style={{marginTop: 0}} columns={columns} dataSource={tableData} />

        </Layout>
    )
}

export default AdminMange
