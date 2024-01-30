import Video from "../models/video.model.js";

export const getVideos = async (req, res) => {
  try {
    const videos = await Video.find({ user: req.user.id }).populate("user");
    res.json(videos);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createVideo = async (req, res) => {
  try {
    const { title, description, credits, date, isPublic } = req.body;
    const newVideo = new Video({
      title,
      description,
      credits,
      date,
      isPublic,
      user: req.user.id,
    });
    await newVideo.save();
    res.json(newVideo);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteVideo = async (req, res) => {
  try {
    const deletedVideo = await Video.findByIdAndDelete(req.params.id);
    if (!deletedVideo)
      return res.status(404).json({ message: "Video not found" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateVideo = async (req, res) => {
  try {
    const { title, description, credits, date, isPublic } = req.body;
    const videoUpdated = await Video.findOneAndUpdate(
      { _id: req.params.id },
      { title, description, credits, date, isPublic },
      { new: true }
    );
    return res.json(videoUpdated);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getVideo = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) return res.status(404).json({ message: "Video not found" });
    return res.json(video);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getVideosByUser = async (req, res) => {
  try {
    const videos = await Video.find({ user: req.params.userId }).populate("user");
    res.json(videos);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getPublicVideos = async (req, res) => {
  try {
    const publicVideos = await Video.find({ isPublic: true }).populate("user");
    res.json(publicVideos);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getPrivateVideos = async (req, res) => {
  try {
    const privateVideos = await Video.find({ user: req.user.id, isPublic: false }).populate("user");
    res.json(privateVideos);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getTopRatedVideos = async (req, res) => {
  try {
    const topRatedVideos = await Video.find().sort({ rating: -1 }).populate("user");
    res.json(topRatedVideos);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const commentOnVideo = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);

    if (!video) {
      return res.status(404).json({ message: "Video not found" });
    }

    const { text } = req.body;

    const newComment = {
      user: req.user.id,
      text,
    };

    video.comments.push(newComment);
    await video.save();

    res.json(video);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const likeVideo = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);

    if (!video) {
      return res.status(404).json({ message: "Video not found" });
    }

    // verify like is like=true or +2
    const alreadyLiked = video.likes.some(like => like.user.equals(req.user.id));

    if (alreadyLiked) {
      return res.status(400).json({ message: "You already liked this video" });
    }

    video.likes.push({ user: req.user.id });
    await video.save();

    res.json(video);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};