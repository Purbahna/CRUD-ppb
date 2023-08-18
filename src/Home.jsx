// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'



// function Home() {
//     const [data, setData] = useState([])
//     const navigate = useNavigate();
//     useEffect(() => {
//         axios
//         .get('https://mocki.io/v1/f92a46cf-e38f-4b35-89ff-40d89c263113')
//         .then(res => setData(res.data.users))
//         .catch(err => console.log(err))
//     }, [])

//     const handleDelete = (id) => {
//         const confirm = window.confirm("Are you sure?");
//         if(confirm) {
//             axios.delete('https://mocki.io/v1/f92a46cf-e38f-4b35-89ff-40d89c263113'+id)
//             .then(res => {
//                 location.reload();
//             })
//             .catch(err => console.log(err));
//         }
//     }

//   return (
//     <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
//       <h1>List of Users</h1>
//       <div className='w-100 rounded bg-white border shadow p-4'>
//         <div className='d-flex justify-content-end'>
//             <Link to='/create' className='btn btn-success'>Add +</Link>
//         </div>
//         <table className='table table-striped'>
//             <thead>
//                 <tr>
//                     <th>ID</th>
//                     <th>Name</th>
//                     <th>User Name</th>
//                     <th>Email</th>
//                     <th>Phone</th>
//                     <th>Action</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {
//                     data.map((d,i) => (
//                         <tr key={i}>
//                             <td>{d.id}</td>
//                             <td>{d.name}</td>
//                             <td>{d.username}</td>
//                             <td>{d.email}</td>
//                             <td>{d.phone}</td>
//                             <td>
//                                 <Link to={'/read/${d.id}'} className='btn btn-sm btn-info me-2'>Read</Link>
//                                 <Link to={'/update/${d.id}'} className='btn btn-sm btn-primary me-2'>Edit</Link>
//                                 <button onClick={e => handleDelete(d.id)} className='btn btn-sm btn-danger'>Delete</button>
//                             </td>
//                         </tr>
//                     ))
//                 }    
//             </tbody> 
//         </table>
//       </div>
//     </div>
//   )
// }

// export default Home


// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { Table, Button, Modal } from 'antd';
// import { ExclamationCircleOutlined } from '@ant-design/icons';

// const { confirm } = Modal;

// function Home() {
//     const [data, setData] = useState([]);
//     const navigate = useNavigate();

//     useEffect(() => {
//         axios
//             .get('https://mocki.io/v1/f92a46cf-e38f-4b35-89ff-40d89c263113')
//             .then(res => setData(res.data.users))
//             .catch(err => console.log(err));
//     }, []);

//     const handleDelete = (id) => {
//         confirm({
//             title: 'Are you sure?',
//             icon: <ExclamationCircleOutlined />,
//             okText: 'Yes',
//             okType: 'danger',
//             cancelText: 'No',
//             onOk() {
//                 axios
//                     .delete(`https://mocki.io/v1/f92a46cf-e38f-4b35-89ff-40d89c263113/${id}`)
//                     .then(res => {
//                         location.reload();
//                     })
//                     .catch(err => console.log(err));
//             },
//             onCancel() {
//                 console.log('Cancel');
//             },
//         });
//     };

//     const columns = [
//         { title: 'ID', dataIndex: 'id', key: 'id' },
//         { title: 'Name', dataIndex: 'name', key: 'name' },
//         { title: 'User Name', dataIndex: 'username', key: 'username' },
//         { title: 'Email', dataIndex: 'email', key: 'email' },
//         { title: 'Phone', dataIndex: 'phone', key: 'phone' },
//         {
//             title: 'Action',
//             key: 'action',
//             render: (_, record) => (
//                 <span>
//                     <Link to={`/read/${record.id}`} className='btn btn-sm btn-info me-2'>Read</Link>
//                     <Link to={`/update/${record.id}`} className='btn btn-sm btn-primary me-2'>Edit</Link>
//                     <Button onClick={() => handleDelete(record.id)} className='btn btn-sm btn-danger'>Delete</Button>
//                 </span>
//             ),
//         },
//     ];

//     return (
//         <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
//             <h1>List of Users</h1>
//             <div className='w-100 rounded bg-white border shadow p-4'>
//                 <div className='d-flex justify-content-end'>
//                     <Link to='/create' className='btn btn-success'>Add +</Link>
//                 </div>
//                 <Table dataSource={data} columns={columns} />
//             </div>
//         </div>
//     );
// }

// export default Home;


import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Table, Menu, Dropdown, Checkbox} from 'antd';
import { DeleteOutlined, EditOutlined, EyeOutlined, PlusCircleOutlined, DownOutlined } from '@ant-design/icons';
import './App.css';

const Home = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [nameFilter, setNameFilter] = useState('');
  const [usernameFilter, setUsernameFilter] = useState('');
  const [emailFilter, setEmailFilter] = useState('');
  //const [nameLengthFilter, setNameLengthFilter] = useState('');
  const [selectedIdFilters, setSelectedIdFilters] = useState([]);



  // useEffect(() => {
  //   axios
  //     .get('https://mocki.io/v1/f92a46cf-e38f-4b35-89ff-40d89c263113')
  //     .then((res) => setData(res.data.users))
  //     .catch((err) => console.log(err));
  // }, []);

  const apiUrl = 'https://mocki.io/v1/f92a46cf-e38f-4b35-89ff-40d89c263113';

useEffect(() => {
  const filters = [];
  if (nameFilter) filters.push(`name=${nameFilter}`);
  if (usernameFilter) filters.push(`username=${usernameFilter}`);
  if (emailFilter) filters.push(`email=${emailFilter}`);

  const queryString = filters.length > 0 ? `?${filters.join('&')}` : '';

  axios
    .get(apiUrl + queryString)
    .then((res) => setData(res.data.users))
    .catch((err) => console.log(err));
}, [nameFilter, usernameFilter, emailFilter]);


  const handleDelete = (id) => {
    const confirm = window.confirm('Are you sure?');
    if (confirm) {
      axios
        .delete('https://mocki.io/v1/f92a46cf-e38f-4b35-89ff-40d89c263113' + id)
        .then((res) => {
          location.reload();
        })
        .catch((err) => console.log(err));
    }
  };

  const filteredData = data.filter((record) => {
    const nameMatch = record.name.toLowerCase().includes(nameFilter.toLowerCase());
    const usernameMatch = record.username.toLowerCase().includes(usernameFilter.toLowerCase());
    const emailMatch = record.email.toLowerCase().includes(emailFilter.toLowerCase());
    // const nameLengthMatch =
    // nameLengthFilter === '' || record.name.length === parseInt(nameLengthFilter);
    return nameMatch && usernameMatch && emailMatch;
  });

  const handleIdFilter = () => {
    // Convert selectedIdFilters to numerical values for comparison
    const selectedIds = selectedIdFilters.map((value) => parseInt(value.replace('gt', '')));

    const filteredData = data.filter((record) => {
      if (selectedIds.length === 0) {
        return true; // Show all records if no filters are selected
      }
      return selectedIds.some((filter) => record.id > parseInt(filter));
    });
    setData(filteredData);
    // handleChange(null, null, null, { currentDataSource: filteredData });
    // setData(filteredData);
  };

  const handleChange = (_, __, ___, extra) => {
    if (extra.currentDataSource) {
      setData(extra.currentDataSource);
    }
  };
  const handleClearIdFilter = () => {
    setSelectedIdFilters([]);
    // Reset the table data to the original data
    setData(data);
  };

//   const [expandedRowKeys, setExpandedRowKeys] = useState([]);

// const onExpand = (record) => {
//   setExpandedRowKeys([...expandedRowKeys, record.key]);
//   //alert(`Row with key ${record.key} is expanded`);
// };

  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id', fixed: 'left',
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Checkbox.Group
          options={[
            { label: 'ID > 3', value: 'gt3', key: 'gt3' },
            { label: 'ID > 5', value: 'gt5', key: 'gt5' },
            { label: 'ID > 7', value: 'gt7', key: 'gt7' },
          ]}
          value={selectedIdFilters}
          onChange={(values) => setSelectedIdFilters(values)}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}>
          <Button
            type="primary"
            onClick={() => {
              confirm();
            }}
            size="small"
            style={{ width: '45%' }}
          >
            Apply
          </Button>
          <Button
            onClick={() => {
              handleClearIdFilter();
              clearFilters();
            }}
            size="small"
            style={{ width: '45%' }}
          >
            Reset
          </Button>
        </div>
      </div>
    ),
    filterIcon: (filtered) => (
      <DownOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => {
          document.querySelector('.ant-checkbox-group')?.focus();
        }, 0);
      }
    },
    filters: [
      { text: 'ID > 3', value: 'gt3' },
      { text: 'ID > 5', value: 'gt5' },
      { text: 'ID > 7', value: 'gt7' },
    ],
    onFilter: (value, record) => {
      if (value === 'gt3') {
        return record.id > 3;
      } else if (value === 'gt5') {
        return record.id > 5;
      } else if (value === 'gt7') {
        return record.id > 7;
      }
      return false;
    }
  },
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
    <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-600'>
      <h1>List of Users</h1>
      <div className='w-100 rounded bg-white border shadow p-4'>
        <div className='d-flex justify-content-end vh-200'>
          <Link to='/create' className='btn btn-success'>
          Add  
          <PlusCircleOutlined />
          </Link>
        </div>
        <div className="filter-input">
          <h5>Filter items</h5>
          <input
          type="text"
          placeholder="Name"
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
          className="ant-input"
        />
        <input
          type="text"
          placeholder="Username"
          value={usernameFilter}
          onChange={(e) => setUsernameFilter(e.target.value)}
          className="ant-input"
        />
        <input
          type="text"
          placeholder="Email"
          value={emailFilter}
          onChange={(e) => setEmailFilter(e.target.value)}
          className="ant-input"
        />
         
        </div>
        {/* <InputWIthSearch></InputWIthSearch> */}


        <Table
          // components={{
          //   body: {
          //     row: DraggableRow,
          //   },
          // }}
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
            //onExpand: onExpand,
          }}
          dataSource={filteredData}
          pagination={false}
          scroll={{ x: true, y: 500 }}
          //className="ant-table"
          // onRow={(record, index) => ({
          //   index,
          //   id: record.id,
          // })}
          // onSortEnd={handleSortEnd}
        />
      </div>
    </div>
  );
};

export default Home;
