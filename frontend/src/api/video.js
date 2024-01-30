import axios from "./axios";

export const getVideosRequest = async () => axios.get("/video");

export const createVideoRequest = async (video) => axios.post("/video", video);

export const updateVideoRequest = async (video) =>
  axios.put(`/video/${video._id}`, video);

export const deleteVideoRequest = async (id) => axios.delete(`/video/${id}`);

export const getVideoRequest = async (id) => axios.get(`/video/${id}`);
