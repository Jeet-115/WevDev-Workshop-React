
import express from 'express';
import { addProduct, getallProducts } from '../controllers/productController.js'


const router = express.Router();

router.get('/',getallProducts);
router.post('/',addProduct);
export default router;