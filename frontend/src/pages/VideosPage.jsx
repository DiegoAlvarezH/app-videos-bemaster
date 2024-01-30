import { useEffect } from "react";
import { useVideos } from "../context/videosContext";
import { VideoCard } from "../components/videos/VideoCard";
import { ImFileEmpty } from "react-icons/im";

export function VideosPage() {
  const { videos, getVideos } = useVideos();

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <>
      {videos.length === 0 && (
        <div className="flex justify-center items-center p-10">
          <div>
            <ImFileEmpty className="text-6xl text-gray-400 m-auto my-2" />
            <h1 className="font-bold text-xl">
              No tienes ningun video hasta el momento :(
            </h1>
          </div>
        </div>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
        {videos.map((video) => (
          <VideoCard video={video} key={video._id} />
        ))}
      </div>
    </>
  );
}
