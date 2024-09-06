import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import { db, eq, sql , Likes } from "astro:db";

export const server = {
  addLike: defineAction({
    input: z.object({
      postId: z.string(),
    }),
    handler: async (input) => {
      return await db.update(Likes)
      .set({ likes: sql`$(Likes.likes) + 1` })
      .where(eq(Likes.postId, input.postId))
      .returning({likes: Likes.likes});
   },
  }),
};
