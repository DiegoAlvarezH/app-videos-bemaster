// video.js
import { z } from "zod";

export const createVideoSchema = z.object({
  title: z.string({
    required_error: "Title is required",
  }),
  description: z.string({
    required_error: "Description is required",
  }),
  credits: z.string().optional(),
  date: z.string().datetime().optional(),
  isPublic: z.boolean().optional(),
});
