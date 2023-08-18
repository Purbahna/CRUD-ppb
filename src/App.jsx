import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './home'
import Create from './create'
import Update from './update'
import Read from './read'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/' element= {<Home/>}></Route>
        <Route path = '/Create' element= {<Create/>}></Route>
        <Route path = '/Update/:id' element= {<Update/>}></Route>
        <Route path = '/Read/:id' element= {<Read/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

// const API = "https://jsonplaceholder.typicode.com"
// function App() {
//   const [mydata, setMydata] = useState([])

//   // useEffect(() => {
//   //   axios
//   //   .get("https://jsonplaceholder.typicode.com/posts")
//   //   .then((res) => setMydata(res.data) 
//   //   .catch((error) => setIsError(error.message))
//   //   );
//   // }, []);

//   const getApiData = async(url) => {
//     try {
//       const res = await axios.get(url);
//       setMydata(res.data);
//     }
//     catch {
//       //console.log('Something went wrong!');
//       setIsError(error.message)
      
//     }
//   };
//   useEffect(() => {
//     getApiData(`${API}/posts`);
//   }, []);

//   return (
//     <>
//     <h1>Hello World</h1> 
//     {/* {isError != '' && <h2>{isError}</h2>}  */}
//     <div className='grid'>
//     {mydata.slice(0,12).map((post) => {
//       const {id, title, body} = post;
//       return <div className='card' key={id}>
//         <h2>{title.slice(0,15).toUpperCase()}</h2>
//         <p>{body.slice(0,100)}</p>
//       </div>
//     })}
//     </div>
//     </>
    
 // )
//}

export default App
