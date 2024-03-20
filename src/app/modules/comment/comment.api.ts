import { toast } from "@/components/ui/use-toast";
import { CommentService } from "./comment.service";

export const commentApi: CommentService = {
    
    fetchAComment: async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/comments/1");
            const comment = await response.json();
            return comment;
        } catch (error) {
            console.error("something went wrong fetching comment");
        }
    },
    deleteComment() {
        toast({
            description: "The comment has been deleted.",
          })
    }
}