import { commentApi } from "../modules/comment/comment.api"
import { CommentService } from "../modules/comment/comment.service"

export type Dependencies = {
    commentService: CommentService
}

export const dependencies: Dependencies = {
    commentService: commentApi
}