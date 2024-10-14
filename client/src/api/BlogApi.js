export const CreateBlog = async (axios, title, desc, content, category) => {
  // Validate data
  const res = await axios.post("/api/blog", JSON.stringify({
    title: title,
    description: desc,
    content: content,
    category: category
  }))
  return res.data
}

export const GetAllCategory = async (axios) => {
  const res = await axios.get("/api/category")
  console.log(res)
  return res.data
}