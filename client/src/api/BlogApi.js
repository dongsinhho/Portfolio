export const CreateBlog = async (axios, title, desc, content, category) => {
  // Validate data
  const req = JSON.stringify({
    title: title,
    description: desc,
    content: content,
    categories: category
  });
  const res = await axios.post("/api/blog", req)
  return res.data
}

export const UpdateBlog = async (axios, id, title, desc, content, category) => {
  // Validate data
  const req = JSON.stringify({
    title: title,
    description: desc,
    content: content,
    categories: category
  });
  console.log(req)
  const res = await axios.put(`/api/blog/${id}`, req)
  return res.data
}

export const GetAllBlogs = async (axios) => {
  const res = await axios.get("/api/blog")
  return res.data
}

export const GetBlogById = async (axios, id) => {
  const res = await axios.get(`/api/blog/${id}`)
  return res.data
}

export const DeleteBlogById = async (axios, id) => {
  const res = await axios.delete(`/api/blog/${id}`)
  return res
}

export const GetAllCategory = async (axios) => {
  const res = await axios.get("/api/category")
  return res.data
}

