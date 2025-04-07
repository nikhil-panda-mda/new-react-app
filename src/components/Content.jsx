import { useState } from 'react';
import Comments from './Comments';
export default function ({ posts }) {
  const [openPostIds, setOpenPostIds] = useState([]);

  const toggleComments = (postId) => {
    setOpenPostIds(prev => {
      return prev.includes(postId) ? prev.filter(id => id !== postId) : [...prev, postId]
    })
  };

  return (
    <div className="grid grid-cols-3 gap-4 items-start">
      {posts.map((post) => (
        <div key={post.id} className="pb-4 px-4 border rounded-xl shadow-md hover:shadow-lg flex-1">
          <div className="w-full pb-4">
            <img src={`/images/${post.image}`} alt="" className='w-90 mx-auto' />
          </div>
          <div className='pb-3'>
            <h2 className="text-xl font-bold">{post.title}</h2>
            <p className="text-gray-400 mt-2">{post.body}</p>
          </div>
          <button onClick={() => toggleComments(post.id)}>
            {openPostIds.includes(post.id) ? "Hide Comments" : "Show Comments"}
          </button>

          {openPostIds.includes(post.id) && <Comments initialComments={post.comments} postId={post.id} />}
        </div>
      ))}
    </div>
  );
}