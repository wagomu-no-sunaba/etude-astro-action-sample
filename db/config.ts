import { defineDb, defineTable, column } from 'astro:db';

const Likes = defineTable({
  columns: {
    postId: column.text({ primaryKey: true }),
    likes: column.number(),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: {Likes}
});
