import express from "express"
import {UserUpdate, UserChangePhoto} from "../controllers/userControllers.js"
import { Protect } from '../middlewares/authMiddleware.js';
import multer from "multer";


const router = express.Router()
const Uploads = multer(); //multer kisi bhi type ke data ko padh leta h sirf json hi nhi balki dusre tarah ke form ke data

router.put("/update", Protect, UserUpdate);
router.patch("/changePhoto", Protect, Uploads.single("image"), UserChangePhoto);


export default router;