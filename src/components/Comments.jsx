import { useState } from 'react';
import CommentBox from './CommentBox';
import LikeButton from './likeButton';

export default function ({ initialComments , postId }) {

  const [comments, setComments ] = useState(initialComments);
  const addComment = (text) => {
    const newComment = {
      user: text.message,
      liked: false
    }
    setComments(prev => [...prev, newComment]);
  }

  return (
    <div className="border rounded-lg mt-4 space-y-2 h-50 overflow-y-scroll">
      <CommentBox post={postId} addComment = {addComment} />
      {comments.map((comment, index) => {
        const username = Object.keys(comment)[0];
        const likedornot = Object.values(comment)[1];
        const text = comment[username];
        const liked = comment.liked;
        return (
          <div key={index} className="p-3 rounded-md shadow-lg flex">
            <div className="flex flex-col space-y-1">
              <p className='text-xs'>{username}: </p>
              <p className='font-semibold'>{text}</p>
            </div>
            <div className="ms-auto my-auto">
              <LikeButton like={liked}/>
            </div>
          </div>
        );
      })}
    </div>
  );
}
