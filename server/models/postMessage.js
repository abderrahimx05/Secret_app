import { Select } from "@material-ui/core";
import mongoose from "mongoose";
const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  SelectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: new Date(),
});
const PostMessage = mongoose.model("PostMessage", postSchema);
export default PostMessage;
