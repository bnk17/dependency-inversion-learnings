'use client'

import { useState } from "react";
import { CommentCard } from "@/components/CommentCard/CommentCard";
import { Comment } from "@/types/comment";
import { useDependencies } from "@/hooks/hooks";


export default function Home() {
  const [comment, setComments] = useState<Comment|null>(null);
  const {commentService} = useDependencies()


  const handleCommentFetch = async () => {
    const comment = await commentService.fetchAComment();
      setComments(comment)
  }
  const handleResetComment = () => {
    setComments(null);
    commentService.deleteComment()
  };


  return (
    <main className="flex h-full flex-col items-center gap-5 p-24 bg-slate-50 text-center">
      <h1 className="text-3xl font-medium">Dependency inversion</h1>
        <div className=" h-3/6  w-4/6 flex flex-col items-center justify-center gap-5 ">
          {!comment &&
            <div className="p-5 h-full flex flex-col gap-3 items-center justify-center ">
            <div className="text-5xl">💬</div>
            <div className="">Click the button to fetch a comment</div>
            </div>
          }
          {comment && 
            <CommentCard id={comment.id} userId={comment.userId} name={comment.name} body={comment.body} />
          }
        </div>
        <div className="flex gap-5">
          { comment &&

          <button className={`text-slate-300 cursor-not-allowed ${comment &&  ' text-slate-500 b hover:text-white hover:bg-slate-400 cursor-pointer'}  rounded-xl p-1.5`} onClick={handleResetComment} disabled={comment=== null}>Reset Comment ✨</button>
          }
          <button className=" text-slate-400 hover:text-white rounded-xl p-1.5 hover:bg-slate-800" onClick={handleCommentFetch} disabled={comment !== null }>Fetch a Comment 🎉</button>
        </div>
    </main>
  );
}
