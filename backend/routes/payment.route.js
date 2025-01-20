import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { checkoutSuccess, creatCheckOutSession } from "../controllers/payment.controller.js";


const router = express.Router();

router.post("/create-checkout-session", protectRoute, creatCheckOutSession)
router.post("/checkout-session", protectRoute, checkoutSuccess)

export default router;