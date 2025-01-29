import express from 'express';
import { isAuthentic } from '../middleware/midwIsAuthentic.js'
import * as contrlUser from '../controllers/contrlUser.js'
import { notFound } from '../middleware/midwAppNotFound.js';

//api/user/
export const routerUser = express.Router();
//NOTE: CHANGE GET METHOD TO POST TO BE ABLE TO RETRIEVE VERIFICATION CODE
// (DUE TO MULTIPLE ONLINE SOURCES REFER TO POST AS A BETTER OPTION EG.: https://stackoverflow.com/questions/978061/http-get-with-request-body/983458#983458, https://stackoverflow.com/questions/32248711/how-to-use-req-body-via-get-request-in-nodejs)
routerUser.post('/email/verify', contrlUser.emailVerificationCode);

routerUser.post('/profile', contrlUser.verifyEmailAndCreateProfile);

routerUser.post('/login', contrlUser.userLogin);

routerUser.delete('/logout', contrlUser.userLogout);

//NOT FOUND - /api/user/????
routerUser.use(notFound);