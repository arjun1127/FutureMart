import express from "express";
import { getProducts } from "../controllers/productControllers.js";
import { createProducts } from "../controllers/productControllers.js";
import { updateProducts } from "../controllers/productControllers.js";
import { deleteProducts } from "../controllers/productControllers.js";
import { getProduct} from "../controllers/productControllers.js";

const router =express.Router();

router.get("/",getProducts);
router.get("/:id",getProduct);
router.post("/",createProducts);
router.put("/:id",updateProducts);
router.delete("/:id",deleteProducts);


export default router;