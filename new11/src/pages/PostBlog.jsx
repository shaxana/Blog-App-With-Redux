import React, { useRef } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { postBlog } from '../redux/slices/blogSlice'
import { useNavigate } from 'react-router-dom'
function PostBlog() {
    const dispatch = useDispatch()
    let navigate = useNavigate()
    const blogname = useRef()
    const blogdescription = useRef()
  return (
   <form onSubmit={()=>{
    axios.post("http://localhost:3000/blogs/", {
        name: blogname.current.value,
        description: blogdescription.current.value
    })
    dispatch(postBlog(blogs))
   }} >
    <label htmlFor="blogName">Blog name</label>
    <input type="text" placeholder='enter blogName' id='blogName' ref={blogname}/>
    <br /> <br />
    <label htmlFor="blogDescription">Blog description</label>
    <input type="text" id='blogDescription' placeholder='enter blog description'  ref={blogdescription} />
    <br /> <br />
    <button type='submit' onSubmit={()=>{
      navigate("/")
    }}>submit</button>
   </form>
  )
}

export default PostBlog