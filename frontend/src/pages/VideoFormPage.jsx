import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { Button, Card, Input, Label } from "../components/ui";
import { useVideos } from "../context/videosContext";
import { Textarea } from "../components/ui/Textarea";
import { useForm } from "react-hook-form";
dayjs.extend(utc);

export function VideoFormPage() {
  const { createVideo, getVideo, updateVideo } = useVideos();
  const navigate = useNavigate();
  const params = useParams();
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      if (params.id) {
        updateVideo(params.id, {
          ...data,
          date: dayjs.utc(data.date).format(),
        });
      } else {
        createVideo({
          ...data,
          date: dayjs.utc(data.date).format(),
        });
      }

      // navigate("/videos");
    } catch (error) {
      console.log(error);
      // window.location.href = "/";
    }
  };

  useEffect(() => {
    const loadVideo = async () => {
      if (params.id) {
        const video = await getVideo(params.id);
        setValue("title", video.title);
        setValue("description", video.description);
        setValue(
          "date",
          video.date ? dayjs(video.date).utc().format("YYYY-MM-DD") : ""
        );
        setValue("completed", video.completed);
      }
    };
    loadVideo();
  }, []);

  return (
    <Card>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="title">Titulo</Label>
        <Input
          type="text"
          name="title"
          placeholder="Titulo de tu video"
          {...register("title")}
          autoFocus
        />
        {errors.title && (
          <p className="text-red-500 text-xs italic">Please enter a title.</p>
        )}

        <Label htmlFor="description">Descripcion</Label>
        <Textarea
          name="description"
          id="description"
          rows="3"
          placeholder="Descripcion de tu video"
          {...register("description")}
        ></Textarea>

        {/* <Label htmlFor="date">Date</Label> */}
        {/* <Input type="date" name="date" {...register("date")} /> */}
        
        <Button>Guardar</Button>
      </form>
    </Card>
  );
}
