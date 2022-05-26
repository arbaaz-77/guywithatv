import React, { useRef, useState } from "react";

import { submitComment } from "../services";

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();

  const handleCommentSubmission = () => {
    setError(false);
    console.log("clicked");

    const { value: comment } = commentEl.current;
    const { value: name } = nameEl.current;
    const { value: email } = emailEl.current;

    if (!comment || !name || !email) {
      setError(true);
      return;
    }

    const commentObj = { name, email, comment, slug };

    submitComment(commentObj).then((response) => {
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    });
  };

  return (
    <div className="mb-8 rounded-lg bg-white p-8 pb-12 shadow-lg">
      <h3 className="mb-8 border-b pb-4 text-xl font-semibold">
        Leave a Reply
      </h3>

      {/* Comment Area */}
      <div className="mb-4 grid grid-cols-1 gap-4">
        <textarea
          ref={commentEl}
          name="comment"
          id=""
          cols="30"
          rows="10"
          className="w-full rounded-lg bg-gray-100 p-4 text-gray-700 outline-none focus:ring-2 focus:ring-gray-200"
          placeholder="Share your thoughts.."
        />
      </div>

      {/* Name and Email */}
      <div className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <input
          type="text"
          ref={nameEl}
          className="w-full rounded-lg bg-gray-100 py-2 px-4 text-gray-700 outline-none focus:ring-2 focus:ring-gray-200"
          name="name"
          placeholder="Name"
        />
        <input
          type="email"
          ref={emailEl}
          className="w-full rounded-lg bg-gray-100 py-2 px-4 text-gray-700 outline-none focus:ring-2 focus:ring-gray-200"
          name="email"
          placeholder="Email"
        />
      </div>

      {error && (
        <p className="text-xs text-red-500">
          All fields are necessary General Kenobi.
        </p>
      )}

      {/* Submit Comment */}
      <div className="mt-8">
        <button
          type="button"
          onClick={handleCommentSubmission}
          className="ease inline-block cursor-pointer rounded-full bg-red-500 px-8 py-3 text-xl 
          text-white transition duration-500 hover:bg-indigo-900"
        >
          Execute order 66
        </button>
        {showSuccessMessage && (
          <span className="float-right mt-3 text-xl font-semibold text-green-500">
            Your request has been sent for review Jedi
          </span>
        )}
      </div>
    </div>
  );
};

export default CommentsForm;
