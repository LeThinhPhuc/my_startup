import express from 'express';
import userAdminController from '../controllers/userAdminController';
import authMdw from '../middlewares/authMdw';
const router = express.Router();

//middlewares
// router.use(authMdw);

// API Get ALl User Admin
router.get("/", authMdw, userAdminController.fetchAllUser)

//API Get User
router.get("/:id", userAdminController.fetchUser);

// API Register User
router.post("/", userAdminController.registerUser);

//API Update Information User
router.put("/:id", userAdminController.updateIn4User);

//API Delete User Admin
router.delete("/:id", userAdminController.deleteUser);

export default router;