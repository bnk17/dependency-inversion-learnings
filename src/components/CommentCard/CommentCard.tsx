import { Comment } from "@/types/comment";

type CommentCardProps = Comment
export const CommentCard = ({body,id,name,userId}:Comment) => {
    
    return(
        <div className=" flex flex-col items-center justify-center gap-2 w-full h-full p-5 border border-slate-200 rounded-xl">
            <>
              <p>{userId}</p>
              <p>{id}</p>
              <h2 className="text-2xl font-normal">{name}</h2>
              <p>{body}</p>
            </>
        </div>
    )
}