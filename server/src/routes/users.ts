import express from 'express';
import userAdminController from '../controllers/userAdminController';
import authMdw from '../middlewares/authMdw';
const router = express.Router();

// API Get ALl User Admin
router.get("/",authMdw.authMdw, authMdw.adminMdw, userAdminController.fetchAllUser)

//API Get User
router.get("/:id",authMdw.authMdw, authMdw.adminMdw, userAdminController.fetchUser);

// API Register User
router.post("/", userAdminController.registerUser);

//API Update Information User
router.put("/:id",authMdw.authMdw, authMdw.adminMdw, userAdminController.updateIn4User);

//API Delete User Admin
router.delete("/:id",authMdw.authMdw, authMdw.adminMdw, userAdminController.deleteUser);

export default router;