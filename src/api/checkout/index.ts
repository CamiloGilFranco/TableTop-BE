import { Router } from "express";
import { handleCheckout } from "./ckeckout.controller";

const router = Router();

router.post("/", handleCheckout);

export default router;
