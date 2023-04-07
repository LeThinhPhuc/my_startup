import express from 'express';
import UserAdmin from './users';
import Login from './login'

const router = express.Router();

//API user , register ... http://localhost:8001/admin/users
router.use('/users', UserAdmin)

// API login, authenticator ... http://localhost:8001/admin/login
router.use('/login', Login);

export default router;
