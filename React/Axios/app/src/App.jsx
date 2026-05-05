// import axios from 'axios'
import axiosInstance from './axios'
import './App.css'
import { configs } from 'eslint-plugin-react-hooks'
import { useEffect, useState } from 'react'

function App() {

  const [users, setUsers] = useState([])
  const [formDetails, setFormDetails] = useState({
    name: '',
    age: '',
  })


  // const fetchData = async () => {
  //   const response = await fetch("https://jsonplaceholder.typicode.com/users")
  //   const data = await response.json()
  //   console.log(data)

  //   fetch("https://jsonplaceholder.typicode.com/users")
  //   .then((response) => response.json())
  //   .then(data => console.log(data))

  //   const data = await axios.get("https://jsonplaceholder.typicode.com/users")
  //   console.log(data)

  // }

  // const config = {
  //   baseURL: 'https://jsonplaceholder.typicode.com',
  //   url: '/users',
  // headers: {
  //   Accept: 'application/json',
  //   // 'Content-Type': 'application/json'
  //   Authority: 'Bearer weiotnohntoh'
  // },
  //   timeout: '200'   //ms --> MiliSecond
  // data:{     // we cannot post the data by default settings behaviours of the browser.
  //   name: 'Aplha'
  // }

  //   params:{     // we can sends the data by the use of params in config get function by default and these sends data as the url they through by the url.
  //      name: 'Alpha',
  //      age: 21
  //   }
  // }

  // const fetchData = async () => {
  //  const response =  await axios(config)
  //  console.log(response)
  // }

  // axios.interceptors.request.use(onFUllfilled, onReject)  // agr inceptors request ka mtlb hota hai request jb ja rhi h to uske beech m kuch or add krdena jaise token JWT or ye doo cheezo pr valid krta  hai phle onFullfilled function jb vo request successfull accept ho jye or agr error aa jye to onReject m usko handle krengai or ye onFullfilled and onReject dono functions hi h.

  // axios.interceptors.request.use((config)=>{
  //     console.log(config.headers)
  //     return config     // return must hai inceptors mai 
  // })

  const handleOnChange = (e) => {
    //  console.log(e.target.value, e.target.name)
    const { name, value } = e.target
    setFormDetails(prevDetails => {
       return {
        ...prevDetails,
        [name] : value,
       }
    })
  }

  const fetchData = async () => {
    // const response = await axios({                            // ye bracket {ke andar hm config ki cheeze dalte hai} or get krte time hme isko change krne ki jrurt nhi padti hai config ki {} to hm direct ye use kr lete hai await axios.get(yha url).
    //   url: 'https://69f20cb7b15130b973526fef.mockapi.io/users'
    // })
    const response = await axiosInstance.get('/users', {
      // onDownloadProgress: (progress) => {
      //   const percent = (progress.loaded / progress.total)*100
      //   console.log(percent)
      // }
    })
    setUsers(response.data)
  }

  const PostData = async () => {
    if(formDetails.name === "" || formDetails.age === ""){
      alert("Please Filled all the details")
      return;
    }
    //  await axios({
    //   url: 'https://69f20cb7b15130b973526fef.mockapi.io/users',
    //   method: 'post',
    //   // data: {                // we can perfer to sends the data to server with using data keywords not params(use it when get's the data) from server.
    //   //   name: 'Alpha singh',
    //   //   age: '21'
    //   // }
    //   data: formDetails
    // })
    await axiosInstance.post('/users', formDetails, {
      headers:{
        'Content-Type':'application/json',
      },
      // onUploadProgress: (progress) => {
      //   console.log(progress)
      //   const percent = (progress.loaded / progress.total)*100
      //   console.log(percent)
      // }
    })
    setFormDetails({
      name: '',
      age: '',
    })
    fetchData()
  }


  const editData = async (formDetails) => {
    //   await axios({
    //   url: `https://69f20cb7b15130b973526fef.mockapi.io/users/${formDetails.id}`,
    //   method: 'put',
    //   data: formDetails
    // })
    await axiosInstance.put(`/users/${formDetails.id}`, formDetails)
    setFormDetails({
      name: '',
      age: '',
    })
    fetchData()
  }

  const deleteUser = async (id) => {
    // await axios({
    //   url: `https://69f20cb7b15130b973526fef.mockapi.io/users/${id}`,
    //   method: 'DELETE',
    // })
    await axiosInstance.delete(`/users/${id}`)
    fetchData()
  }


  useEffect(()=>{   // we can use these due to whenever we can change in the server to posts the data then they displays our UI without even to fetchData button clicked.
  //   axios.interceptors.request.use((config)=>{
  //     // console.log(config.headers)
  //     config.headers.Authorization = "Bearer ajdafjefkejfksjdgsjkg"
  //     console.log(config.headers)
  //     return config     // return must hai inceptors mai 
  // }, (err)=>{
  //   console.log('Global error:', err)
  //   return Promise.reject(err)
  // })

  // axios.interceptors.response.use((response)=> {
  //   console.log(response)
  //   response.data = JSON.stringify(response.data)    // this leads an error we cannot map our data we gets from response in string formate.
  //   return response
  // })
    fetchData()
  }, [])


  return (
    <>
      {/* <button onClick={fetchData} >Fetch Data</button> */}

      <input type="text" placeholder='Enter name' name='name' value={formDetails.name} onChange={handleOnChange} />
      <input type="number" placeholder='Enter age' name='age' value={formDetails.age} onChange={handleOnChange} />

      {formDetails.editMode?(
      <button onClick={() => editData(formDetails)} >Save Data</button> 
      ):(
      <button onClick={PostData} >Post Data</button>
      )}

      {users.map((userDetails) => {
        return (
          <div key={userDetails.id}>
            <p>Name: {userDetails.name}</p>
            <p>Age: {userDetails.age}</p>
            <button onClick={() => setFormDetails({...userDetails, editMode: true})} >Edit</button>
            <button onClick={()=>deleteUser(userDetails.id)} >Delete</button>
          </div>
        )
      })}
    </>
  )
}


export default App