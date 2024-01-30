import { createContext, useContext, useState } from "react";
import {
  createVideoRequest,
  deleteVideoRequest,
  getVideosRequest,
  getVideoRequest,
  updateVideoRequest,
} from "../api/video";

const VideoContext = createContext();

export const useVideos = () => {
  const context = useContext(VideoContext);
  if (!context) throw new Error("useVideos must be used within a VideoProvider");
  return context;
};

export function VideoProvider({ children }) {
  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    const res = await getVideosRequest();
    setVideos(res.data);
  };

  const deleteVideo = async (id) => {
    try {
      const res = await deleteVideoRequest(id);
      if (res.status === 204) setVideos(videos.filter((video) => video._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const createVideo = async (video) => {
    try {
      const res = await createVideoRequest(video);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getVideo = async (id) => {
    try {
      const res = await getVideoRequest(id);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updateVideo = async (id, video) => {
    try {
      await updateVideoRequest(id, video);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <VideoContext.Provider
      value={{
        videos,
        getVideos,
        deleteVideo,
        createVideo,
        getVideo,
        updateVideo,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
}
