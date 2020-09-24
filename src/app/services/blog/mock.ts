import { IPost } from 'src/models/Post';

const createPost = (index): IPost => ({
  description: `Description ${index}`,
  is_published: true,
  author: 'John Doe',
  content: 'Lorem ipsum dolor sit',
  id: Math.round(Math.random() * 100),
  publish_date: Date(),
  slug: `slug-post-${index}`,
  title: `Post ${index}`,
});

export const createMockData = (mockItemCount): IPost[] => {
  const posts = [];

  for (let i = 0; i < mockItemCount; i++) {
    posts.push(createPost(i));
  }

  return posts;
};
