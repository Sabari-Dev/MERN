import express from "express";
import {
  createPost,
  getAllPosts,
  getSinglePost,
  updatePost,
  deletePost,
} from "../controllers/postController.js";

const router = express.Router();

// create a post
router.post("/create", createPost);
//get all posts
router.get("/", getAllPosts);
//getSingle post
router.get("/:id", getSinglePost);
//update post
router.put("/:id", updatePost);
//delete Post
router.delete(":/id", deletePost);

export default router;
