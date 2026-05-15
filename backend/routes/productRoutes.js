import express from 'express';
import {
  getProducts,
  getProductBySlug,
  getRelatedProducts,
} from '../controllers/productController.js';

const router = express.Router();

router.get('/', getProducts);
router.get('/:slug/related', getRelatedProducts);
router.get('/:slug', getProductBySlug);

export default router;
