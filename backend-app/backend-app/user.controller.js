const getUsers = (req, res) => {
  res.json({
    success: true,
    users: [
      { id: 1, name: "Pulkit" },
      { id: 2, name: "Shani" }
    ]
  });
};

const createUser = (req, res) => {
  const { name } = req.body;

  res.status(201).json({
    success: true,
    message: "User created",
    user: { id: Date.now(), name }
  });
};

module.exports = {
  getUsers,
  createUser
};