import express from 'express';
import * as contrlPost from '../controllers/contrlPost.js';
import { notFound } from '../middleware/midwAppNotFound.js';

// api/posts/
export const routerPosts = express.Router();

// Get all posts
routerPosts.get('/', contrlPost.getPosts);

// Get single post
routerPosts.get('/:id', contrlPost.getPost);

// Create new post
routerPosts.post('/', contrlPost.createPost);

// Update Post
routerPosts.put('/:id', contrlPost.updatePost);

// Delete Post
routerPosts.delete('/:id', contrlPost.deletePost);

//NOT FOUND - /api/posts/????
routerPosts.use(notFound);
