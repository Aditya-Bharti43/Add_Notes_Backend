import {Router } from "express"
import { addNotes } from "../controllers/user.controller.js"

const router =Router();

router.route("/addNotes").post(addNotes)

export default router