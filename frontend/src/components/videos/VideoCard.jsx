import { useVideos } from "../../context/videosContext";
import { Button, ButtonLink, Card } from "../ui";

export function VideoCard({ video }) {
  const { deleteVideo } = useVideos();

  return (
    <Card>
      <header className="flex justify-between">
        <h1 className="text-2xl font-bold">{video.title}</h1>
        <div className="flex gap-x-2 items-center">
          <Button onClick={() => deleteVideo(video._id)}>Delete</Button>
          <ButtonLink to={`/videos/${video._id}`}>Edit</ButtonLink>
        </div>
      </header>
      <p className="text-slate-300">{video.description}</p>
      {/* format date */}
      <p>
        {video.date &&
          new Date(video.date).toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
      </p>
    </Card>
  );
}
