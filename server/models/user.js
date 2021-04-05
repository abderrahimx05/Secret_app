import mongoose from "mongoose";
const postSchema = mongoose.Schema({
  name: { type: string, required: true },
  email: { type: string, required: true },
  password: { type: string, required: true },
  id: { type: string },
});
let PostMessage = mongoose.model("User", postSchema);
export default PostMessage;
