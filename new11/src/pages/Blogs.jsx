import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { editBlog, postBlog } from '../redux/slices/blogSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';

function Blogs() {
    let [blogs, setBlogs] = useState([])
    let [editedBlog, setEditedBlog] = useState({ id: '', name: '', description: '' })
    let [edit, setEdit] = useState(false)
    const dispatch = useDispatch()
    useEffect(() => {
        axios("http://localhost:3000/blogs").then((res) => {
            setBlogs(res.data)
        })
    }, [])
  

let [searchinp, setSearchinp] = useState('')
let [ filteredBlogs, setFilteredBlogs] = useState([])
    const handleEdit = () => {
        dispatch(editBlog(editedBlog));
        setEditedBlog({ id: '', name: '', descrription: '' });
        setEdit(true)
    };


    return (
        <>
          <input type="text" placeholder='search blog...' value={searchinp} onChange={(e)=>{
            setSearchinp(e.target.value)
            console.log(e.target.value);
            let searchinp = e.target.value
            const filtereddata = blogs.filter((blog) => blog.name.toLowerCase().includes(searchinp.toLowerCase()));
            setFilteredBlogs(filtereddata)
          
        
            }} /> <button style={{marginTop:"10px"}}>search</button>
            <ul>
            {filteredBlogs.length>0 && filteredBlogs.map((filteredBlog)=>(
                    <li key={uuidv4()}>{filteredBlog.name}

                    {edit ?
                        (
                            <form onSubmit={() => {
                                dispatch(editBlog(editedBlog));
                                setEditedBlog({ id: '', name: '', descrription: '' });
                                setEdit(true)
                                axios.put(`http://localhost:3000/blogs/${filteredBlog.id}`,{
                                    name:editedBlog.name,
                                    description:editedBlog.description
                                })
                            }}>
                                <input type="text" placeholder='change blog name' value={editedBlog.name} onChange={(e) => setEditedBlog({ ...editBlog, name: e.target.value })} />
                                <input type="text" placeholder='change blog description' value={editedBlog.description} onChange={(e) => setEditedBlog({ ...editedBlog, description: e.target.value })} />
                                <button type='submit' >Save</button>
                                <button onClick={()=>{
                                    axios.delete(`http://localhost:3000/blogs/${filteredBlog.id}`)
                                    setBlogs(blogs.filter((b)=> b.id !== blog.id))
                                }}>delete</button>
                            </form>
                        ) : (
                            <button onClick={() => {
                                dispatch(editBlog(filteredBlog))
                                handleEdit(filteredBlog)
                               
                            }}>edit</button>
                        )
                    }

                </li>
                ))}
            </ul>
            {/* <ul>
                {
                    blogs && blogs.map((blog) => {
                        return (
                            <li key={uuidv4()}>{blog.name}

                                {edit ?
                                    (
                                        <form onSubmit={() => {
                                            dispatch(editBlog(editedBlog));
                                            setEditedBlog({ id: '', name: '', descrription: '' });
                                            setEdit(true)
                                            axios.put(`http://localhost:3000/blogs/${blog.id}`,{
                                                name:editedBlog.name,
                                                description:editedBlog.description
                                            })
                                        }}>
                                            <input type="text" placeholder='change blog name' value={editedBlog.name} onChange={(e) => setEditedBlog({ ...editBlog, name: e.target.value })} />
                                            <input type="text" placeholder='change blog description' value={editedBlog.description} onChange={(e) => setEditedBlog({ ...editedBlog, description: e.target.value })} />
                                            <button type='submit' >Save</button>
                                            <button onClick={()=>{
                                                axios.delete(`http://localhost:3000/blogs/${blog.id}`)
                                                setBlogs(blogs.filter((b)=> b.id !== blog.id))
                                            }}>delete</button>
                                        </form>
                                    ) : (
                                        <button onClick={() => {
                                            dispatch(editBlog(blog))
                                            handleEdit(blog)
                                           
                                        }}>edit</button>
                                    )
                                }

                            </li>
                        )
                    })
                }
            </ul> */}

            <button onClick={()=>{
                setBlogs([...blogs].sort((a,b) => a.name.localeCompare(b.name)))
            }}>Sort Blogs</button>

          

        </>
    )
}

export default Blogs