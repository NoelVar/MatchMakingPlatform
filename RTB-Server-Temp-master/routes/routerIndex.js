import express from 'express';
import { isAuthentic } from '../middleware/midwIsAuthentic.js'
import { routerUser } from './routerUser.js'
import { routerPosts } from './routerposts.js';

import { notFound } from '../middleware/midwAppNotFound.js';

export const routerIndex = express.Router();

//USER - /api/user/
routerIndex.use('/user', routerUser);

//POSTS - /api/posts
routerIndex.use('/posts', isAuthentic, routerPosts);

//BYPASS AUTHENTICATION FOR TESTING-----
//routerIndex.use('/posts', routerPosts);

//NOT FOUND - /api/????
routerIndex.use(notFound);