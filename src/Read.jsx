// import React from 'react'
// import { useParams, useNavigate } from 'react-router-dom'
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import { useState, useEffect } from 'react';


// function Read() {
//   const [data, setData] = useState([])
//   const {id} = useParams();
//   const navigate = useNavigate()
//     useEffect(() => {
//         axios
//         fetch('https://mocki.io/v1/f92a46cf-e38f-4b35-89ff-40d89c263113')
//         .then(res => setData(res.data.users))
//         .catch(err => console.log(err))
//     }, [])
//   return (
//       <div className='d-flex=100 vh-100 justify-content-center align-items-center bg-light'>
//         <div className='w-500 border bg-white shadow px-5 pt-3 pb-5 rounded'>
//           <h3>Details of User</h3>

//           <div className='mb-2'>
//             <strong>Name: {data.name}</strong>
//            </div> 

//             <div className='mb-2'>
//             <strong>Email: {data.email}</strong>
//           </div>

//           <div className='mb-3'>
//             <strong>Phone: {data.phone}</strong>
//           </div>

//           <Link to={'/update/${id}'} className='btn btn-success'>Edit</Link>
//           <Link to='/' className='btn btn-primary ms-3'>Back</Link>
//         </div>
//       </div>
      
//   )
// }

// export default Read

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { Table, Button } from 'antd';

function Read() {
  const [userData, setUserData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://mocki.io/v1/f92a46cf-e38f-4b35-89ff-40d89c263113/${id}`)
      .then(res => {
        setUserData(res.data);
      })
      .catch(err => console.log(err));
  }, [id]);

  const columns = [
    { title: 'Attribute', dataIndex: 'attribute', key: 'attribute' },
    { title: 'Value', dataIndex: 'value', key: 'value' },
  ];

  const dataSource = [
    { key: '1', attribute: 'Name', value: userData.name },
    { key: '2', attribute: 'Email', value: userData.email },
    { key: '3', attribute: 'Phone', value: userData.phone },
  ];

  return (
    <div className='d-flex=100 vh-100 justify-content-center align-items-center bg-light'>
      <div className='w-500 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h3>Details of User</h3>
        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={false}
          size="middle"
        />
        <Link to={`/update/${id}`} className='btn btn-success'>Edit</Link>
        <Link to='/' className='btn btn-primary ms-3'>Back</Link>
      </div>
    </div>
  );
}

export default Read;
