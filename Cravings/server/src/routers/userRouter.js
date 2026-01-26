import express from "express"
import {UserUpdate, userChangePhoto} from "../controllers/userControllers.js"
import { Protect } from '../middlewares/authMiddleware.js';
import multer from "multer";


const router = express.Router()
const Upload = multer();

router.put("/update", Protect, UserUpdate);
router.post("/changePhoto", Protect, Upload.single("image"), userChangePhoto);


export default router;