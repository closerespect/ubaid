import React from 'react';
import PostGrid from './PostGrid';

const mockPosts = [
  {
    id: 1,
    imageUrl: 'https://placekitten.com/300/200',
    title: 'Cute Kitten 1',
    likes: 123,
    userName:'John Doe',
    userImg:'https://randomuser.me/api/portraits/men/1.jpg',
    caption: 'First post with a cute kitten.',
    comments:['user1: test comment']
  },
  {
    id: 2,
    imageUrl: 'https://placekitten.com/300/201',
    title: 'Cute Kitten 2',
    likes: 456,
    userName:'Jane Smith',
    userImg:'https://randomuser.me/api/portraits/women/1.jpg',
    caption: 'Another adorable kitten.',
    comments:['user1: test comment']
  },
    {
    id: 3,
    imageUrl: 'https://placekitten.com/300/202',
    title: 'Cute Kitten 3',
      likes: 342,
      userName:'User 3',
      userImg:'https://randomuser.me/api/portraits/men/2.jpg',
    caption: 'A playful kitten.',
        comments:['user1: test comment']
  },
  {
    id: 4,
    imageUrl: 'https://placekitten.com/300/203',
    title: 'Cute Kitten 4',
      likes: 1231,
        userName:'User 4',
    userImg:'https://randomuser.me/api/portraits/women/2.jpg',
    caption: 'Kitten in a basket',
      comments:['user1: test comment']
  },
    {
    id: 5,
    imageUrl: 'https://placekitten.com/300/204',
    title: 'Cute Kitten 5',
      likes: 90,
    userName:'User 5',
      userImg:'https://randomuser.me/api/portraits/men/3.jpg',
    caption: 'Sleepy kitten',
        comments:['user1: test comment']
  },

];

function PostPage() {
  return (
    <div className="container mt-4">
      <PostGrid posts={mockPosts} />
    </div>
  );
}

export default PostPage;