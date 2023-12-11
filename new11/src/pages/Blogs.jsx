import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { editBlog, postBlog} from '../redux/slices/blogSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';

function Blogs() {
    let [blogs, setBlog] = useState([])
    const dispatch = useDispatch
    useEffect(() => {
        axios("http://localhost:3000/blogs").then((res) => {
            setBlog(res.data)
        })
    }, [])
    let navigate = useNavigate()
    return (
        <>

            <ul>
                {
                    blogs && blogs.map((blog) => {
                        return (
                            <li key={uuidv4()}>{blog.name} <button onClick={()=>{
                                dispatch(editBlog())
                            }}>edit</button></li>
                        )
                    })
                }
            </ul>
            
            <button onClick={() => {
                navigate("/postblog")
            }}>Add Blog</button>
        </>
    )
}

export default Blogs