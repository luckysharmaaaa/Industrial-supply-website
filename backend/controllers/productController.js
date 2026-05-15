import Product from '../models/Product.js';

// @desc    Get all products
// @route   GET /api/products
export const getProducts = async (req, res) => {
  const products = await Product.find({ isActive: true }).sort({ createdAt: 1 });

  res.json({ success: true, count: products.length, data: products });
};

// @desc    Get product by slug
// @route   GET /api/products/:slug
export const getProductBySlug = async (req, res) => {
  const product = await Product.findOne({ slug: req.params.slug, isActive: true });

  if (!product) {
    res.status(404);
    throw new Error('Product not found');
  }

  res.json({ success: true, data: product });
};

// @desc    Get related products
// @route   GET /api/products/:slug/related
export const getRelatedProducts = async (req, res) => {
  const limit = parseInt(req.query.limit, 10) || 3;
  const products = await Product.find({
    slug: { $ne: req.params.slug },
    isActive: true,
  })
    .limit(limit)
    .sort({ createdAt: 1 });

  res.json({ success: true, count: products.length, data: products });
};
