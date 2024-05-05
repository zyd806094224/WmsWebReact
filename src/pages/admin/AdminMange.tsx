import {Button, Input, Layout, message, Pagination, Select, Table, TableProps} from "antd";
import {useEffect, useState} from "react";


interface DataType {

}

const AdminMange = (props: any) => {

    const [pageSize, setPageSize] = useState(1)
    const [pageNum, setPageNum] = useState(1)
    const [name, setName] = useState('')
    const [sex, setSex] = useState('')
    const [roleId, setRoleId] = useState('1')
    const [tableData, setTableData] = useState([])
    const [total, setTotal] = useState(0)

    useEffect(() => {
        console.log('pageNum========' + pageNum)
        console.log('pageSize========' + pageSize)
        loadPost().then(r => {

        })
    }, [pageNum, pageSize])

    const loadPost = async () => {
        console.log(pageSize + '---' + pageNum)
        let params = {
            'pageSize': pageSize,
            'pageNum': pageNum,
            'param': {
                'name': name,
                'sex': sex,
                'roleId': roleId
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
                    setTotal(data.total)
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

    // 自定义中文分页语言
    const chineseLocale = {
        items_per_page: '/页',
        jump_to: '跳至',
        jump_to_confirm: '确定',
        page: '页',
        prev_page: '上一页',
        next_page: '下一页',
        prev_5: '向前 5 页',
        next_5: '向后 5 页',
        prev_3: '向前 3 页',
        next_3: '向后 3 页',
    };

    const paginationOnChange = (page: number, pagesize: number) => {
        setPageSize(pagesize)
        setPageNum(page)
    }

    const select = () => {
        loadPost()
    }

    const sexChange = (value: any, label: any) => {
        console.log(value + '---' + label)
        if ('男' == value) {
            setSex('1')
        } else if ('女' == value) {
            setSex('0')
        }
    }

    const inputChange = (e: any) => {
        console.log(e.target.value)
        setName(e.target.value)
    }

    return (
        <Layout style={{flexDirection: 'column', width: '100%'}}>
            <Layout style={{flexDirection: 'row', marginTop: '5px'}}>
                <Input onChange={inputChange} placeholder={'请输入名字'} style={{width: '200px', height: '30px'}}></Input>
                <Select
                    onChange={sexChange}
                    // defaultValue=""
                    style={{width: '200px', height: '30px', marginLeft: '5px'}}
                    allowClear
                    placeholder={'请选择性别'}
                    options={[{value: '男', label: '男'}, {value: '女', label: '女'}]}
                />
                <Button type="primary" style={{marginLeft: '5px'}} onClick={select}>查询</Button>
                <Button style={{marginLeft: '5px'}}>重置</Button>
                <Button style={{marginLeft: '5px'}}>新增</Button>
            </Layout>

            <Table style={{marginTop: 0}} columns={columns} dataSource={tableData} pagination={false}/>

            <div style={{textAlign: "right"}}>
                <Pagination style={{marginTop: '15px'}} showQuickJumper={false} defaultPageSize={pageSize}
                            defaultCurrent={pageNum}
                            total={total} pageSizeOptions={[1, 10, 20]} onChange={paginationOnChange}
                            locale={chineseLocale}/>
            </div>
        </Layout>
    )
}

export default AdminMange
