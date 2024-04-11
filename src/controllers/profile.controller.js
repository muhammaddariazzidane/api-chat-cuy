export const getProfile = async (req, res) => {
  const user = req.user;
  return res.json({ user });
};
