import React, { useState } from 'react';

const ForumPilihan = () => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([
    {
      id: 1,
      name: 'Michael Gough',
      avatar: 'https://flowbite.com/docs/images/people/profile-picture-2.jpg',
      date: 'Feb. 8, 2022',
      text: 'Very straight-to-point article. Really worth time reading. Thank you!',
    },
    {
      id: 2,
      name: 'Jese Leos',
      avatar: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
      date: 'Feb. 12, 2022',
      text: 'Much appreciated! Glad you liked it ☺️',
    },
  ]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const newComment = {
      id: comments.length + 1,
      name: 'New User',
      avatar: 'https://flowbite.com/docs/images/people/profile-picture-3.jpg',
      date: new Date().toLocaleDateString(),
      text: comment,
    };
    setComments([...comments, newComment]);
    setComment('');
  };

  return (
    <section className="bg-white dark:bg-gray-900 py-8 lg:py-16 antialiased">
      <div className="max-w-2xl mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
            Discussion ({comments.length})
          </h2>
        </div>
        <form className="mb-6" onSubmit={handleCommentSubmit}>
          <div className="py-2 px-4 mb-4 bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <label htmlFor="comment" className="sr-only">Your comment</label>
            <textarea
              id="comment"
              rows="6"
              className="w-full text-sm text-gray-900 border-0 focus:ring-0 dark:text-white dark:bg-gray-800"
              placeholder="Write a comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2.5 text-xs font-medium text-white bg-blue-600 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-700"
          >
            Post comment
          </button>
        </form>

        {comments.map((comment) => (
          <article key={comment.id} className="p-6 mb-3 bg-white rounded-lg dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
            <footer className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                  <img
                    className="mr-2 w-6 h-6 rounded-full"
                    src={comment.avatar}
                    alt={comment.name}
                  />
                  {comment.name}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <time>{comment.date}</time>
                </p>
              </div>
              <button
                className="inline-flex items-center p-2 text-sm font-medium text-gray-500 bg-white rounded-lg dark:text-gray-400 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-50 dark:focus:ring-gray-600"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 3">
                  <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                </svg>
              </button>
            </footer>
            <p className="text-gray-500 dark:text-gray-400">{comment.text}</p>
            <div className="flex items-center mt-4 space-x-4">
              <button
                type="button"
                className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
              >
                <svg className="mr-1.5 w-3.5 h-3.5" fill="none" viewBox="0 0 20 18">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"/>
                </svg>
                Reply
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ForumPilihan;
