import { Router } from "express";
import {
  createVideo,
  deleteVideo,
  getVideo,
  getVideos,
  updateVideo,
  getVideosByUser,
  getPublicVideos, 
  getPrivateVideos,
  getTopRatedVideos,
  commentOnVideo,
  likeVideo,
  // getVideo,
} from "../controllers/video.controllers.js";
import { auth } from "../middlewares/auth.middleware.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createVideoSchema } from "../schemas/video.schema.js";

const router = Router();

router.get("/videos", auth, getVideos);

router.post("/videos", auth, validateSchema(createVideoSchema), createVideo);

router.get("/videos/:id", auth, getVideo);

router.put("/videos/:id", auth, updateVideo);

router.delete("/videos/:id", auth, deleteVideo);

router.get("/videos/user/:userId", auth, getVideosByUser);

router.get("/videos/public", getPublicVideos);

router.get("/videos/private", auth, getPrivateVideos);

router.get("/videos/top-rated", getTopRatedVideos);

router.post("/videos/:id/comment", auth, commentOnVideo);

router.post("/videos/:id/like", auth, likeVideo);

export default router;
