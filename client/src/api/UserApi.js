
export const HandleLogin = async (axios, email, password) => {
  const res = await axios.post("/login", JSON.stringify({
    email: email,
    password: password
  }))
  return res.data
}

export const HandleLogout = async (axios) => {
  const res = await axios.post("/logout")
  return res.data
}