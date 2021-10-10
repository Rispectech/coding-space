import React from "react"
import Comment from "./comment"

const CommentSection = () => {
  return (
    <section className="w-full px-2 pt-4 from-purple-500 to-indigo-500 rounded-xl shadow-md bg-gradient-to-br mt-8">
      <div className="w-95/100 m-auto">
        <h2 className="text-white font-bold text-3xl py-2">N Comments</h2>
        <Comment />
      </div>
    </section>
  )
}

export default CommentSection
