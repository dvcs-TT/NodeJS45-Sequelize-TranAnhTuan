import likeService from "../services/like.service.js";

const createLike = () => async (req, res) => {
  try {
    const data = req.body;
    const createdLike = await likeService.createLike(data);

    res.status(200).json({ data: createdLike });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const deleteLike = () => async (req, res) => {
  try {
    const { id } = req.params;
    await likeService.deleteLike(id);
    res.status(200).json("OK!");
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const getLikes = () => async (req, res) => {
  try {
    const data = await likeService.getLikes();
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export default { createLike, deleteLike, getLikes };
