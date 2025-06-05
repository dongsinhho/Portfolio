// CreateCategory: Gửi request tạo category mới, trả về object category (có id thực)
export const CreateCategory = async (axios, name) => {
  const req = JSON.stringify({ name });
  const res = await axios.post("/api/category", req);
  // Nếu backend trả về category mới tạo, trả về res.data.data
  // Nếu chỉ trả về message, cần gọi lại GetAllCategory để lấy id mới nhất
  return res.data;
};
