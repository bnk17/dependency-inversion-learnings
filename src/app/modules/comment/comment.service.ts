import { Comment } from "@/types/comment";


// CommentService is a type that defines the methods
export type CommentService = {
    fetchAComment: () => Promise<Comment>;
    deleteComment: () => void;
}