
export const HandleLogin = async (axios, email, password) => {
  const res = await axios.post("/login", JSON.stringify({
    email: email,
    password: password
  }))
  return res.data
}