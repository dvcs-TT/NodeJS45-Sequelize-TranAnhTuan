import userService from "../services/user.service";

const getUsers = () => async (req, res) => {
  try {
    const data = await userService.getUsers();
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUserLikes = () => async (req, res) => {
  try {
    const { userId } = req.params;
    const data = await userService.getUserLikes(userId);
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const getUserRates = () => async (req, res) => {
  try {
    const { userId } = req.params;
    const data = await userService.getUserRates(userId);
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export { getUsers, getUserLikes, getUserRates };
