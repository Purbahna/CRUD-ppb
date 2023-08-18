import React from 'react';
import { Table, Button } from 'antd';
import { DeleteOutlined, EditOutlined, EyeOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const CustomTable = ({ data, handleDelete }) => {
  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id', fixed: 'left' },
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'User Name', dataIndex: 'username', key: 'username' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Phone', dataIndex: 'phone', key: 'phone' },
    {
      title: 'Action',
      dataIndex: 'id',
      key: 'action',
      fixed: 'right',
      render: (id) => (
        <div>
          <Link to={`/read/${id}`} className='btn btn-sm btn-info me-2'>
            <EyeOutlined />
            Read
          </Link>
          <Link to={`/update/${id}`} className='btn btn-sm btn-primary me-2'>
            <EditOutlined />
            Edit
          </Link>
          <Button
            onClick={(e) => handleDelete(id)}
            className='btn btn-sm btn-danger'
          >
            <DeleteOutlined />
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      expandable={{
        expandedRowRender: (record) => (
          <p
            style={{
              margin: 0,
            }}
          >
            {record.name}
          </p>
        ),
        rowExpandable: (record) => record.name !== 'Not Expandable',
      }}
      dataSource={data}
      pagination={false}
      scroll={{ x: true, y: 500 }}
    />
  );
};

export default CustomTable;
