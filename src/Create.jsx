// import React, { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import axios from 'axios'

// function create() {

//   const [values, setValues] = useState({
//     name: '',
//     username: '',
//     email:'',
//     phone:''
//   })

//   const navigate = useNavigate();

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     axios
//         .post('https://mocki.io/v1/1fd0ed0a-8463-4d1b-961f-653c4049a9af', values)
//         .then(res => {
//             console.log(res);
//             navigate('/')
//         })
//         .catch(err => console.log(err));
//   }

//   return (
//     <div className='d-flex=100 vh-100 justify-content-center align-items-center bg-light'>
//       <div className='w-500 border bg-white shadow px-5 pt-3 pb-5 rounded'>
//         <h2>Add a User</h2>
//         <form onSubmit={handleSubmit}>
//           <div className='mb-2'>
//             <label htmlFor='name'>Name:</label>
//             <input type='text' name='name' className='form-control' placeholder='Enter Name'
//             onChange={e => setValues({...values, name: e.target.value})}/>
//           </div>
//           <div className='mb-2'>
//             <label htmlFor='name'>User Name:</label>
//             <input type='text' name='username' className='form-control' placeholder='Enter User Name'
//             onChange={e => setValues({...values, name: e.target.value})}/>
//           </div>
//           <div className='mb-2'>
//             <label htmlFor='email'>Email:</label>
//             <input type='email' name='email' className='form-control' placeholder='Enter Email'
//             onChange={e => setValues({...values, email: e.target.value})}/>
//           </div>
//           <div className='mb-2'>
//             <label htmlFor='name'>Phone:</label>
//             <input type='text' name='phone' className='form-control' placeholder='Enter Phone No.'
//             onChange={e => setValues({...values, phone: e.target.value})}/>
//           </div>
//           <button className='btn btn-success'>Submit</button>
//           <Link to='/' className='btn btn-primary ms-3'>Back</Link>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default create

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import axios from 'axios';

function Create() {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    axios
      .post('https://mocki.io/v1/1fd0ed0a-8463-4d1b-961f-653c4049a9af', values)
      .then((res) => {
        console.log(res);
        navigate('/');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='d-flex=100 vh-100 justify-content-center align-items-center bg-light'>
      <div className='w-500 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h2>Add a User</h2>
        <Form form={form} onFinish={handleSubmit}>
          <Form.Item name='name' label='Name' rules={[{ required: true }]}>
            <Input placeholder='Enter Name' />
          </Form.Item>
          <Form.Item name='username' label='User Name' rules={[{ required: true }]}>
            <Input placeholder='Enter User Name' />
          </Form.Item>
          <Form.Item name='email' label='Email' rules={[{ required: true, type: 'email' }]}>
            <Input placeholder='Enter Email' />
          </Form.Item>
          <Form.Item name='phone' label='Phone' rules={[{ required: true }]}>
            <Input placeholder='Enter Phone No.' />
          </Form.Item>
          <Form.Item>
            <Button type='primary' htmlType='submit'>
              Submit
            </Button>
            <Link to='/' className='btn btn-primary ms-3'>
              Back
            </Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Create;
