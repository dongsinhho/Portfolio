export const CreateBlog = async (axios, blog) => {
  // Validate data
  const res = await axios.post("/api/blog", blog)
  return res.data
}

export const GetAllCategory = async (axios) => {
  const res = await axios.get("/api/category")
  return res.data
}