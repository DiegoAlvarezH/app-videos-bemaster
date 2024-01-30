import { z } from "zod";

export const createVideoSchema = z.object({
  title: z.string({
    required_error: "Titulo es requerido",
  }),
  description: z.string({
    required_error: "Descripcion es requerida",
  }),
});
