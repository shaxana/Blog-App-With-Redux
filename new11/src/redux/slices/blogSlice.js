import { createSlice } from '@reduxjs/toolkit'

export const blogSlice = createSlice({
  name: 'blog',
  initialState:{
    blogs:[]
  },
  reducers: {
    postBlog: (state,action) => {
      state.blogs.push(action.payload)
    },
    editBlog: (state,action) => {
      const {id, name, description} = action.payload
     const existingBlog = state.find(blog => blog.id === id)
     if (existingBlog){
      existingBlog.name = name,
      existingBlog.description = description
     }
    }
  },
})

export const { postBlog,editBlog } = blogSlice.actions

export default blogSlice.reducer