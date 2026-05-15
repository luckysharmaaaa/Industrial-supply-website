import BlogPost from '../models/BlogPost.js';

// @desc    Get all blog posts
// @route   GET /api/blog
export const getBlogPosts = async (req, res) => {
  const posts = await BlogPost.find({ isPublished: true }).sort({ date: -1 });

  res.json({ success: true, count: posts.length, data: posts });
};

// @desc    Get blog post by slug
// @route   GET /api/blog/:slug
export const getBlogPostBySlug = async (req, res) => {
  const post = await BlogPost.findOne({ slug: req.params.slug, isPublished: true });

  if (!post) {
    res.status(404);
    throw new Error('Blog post not found');
  }

  res.json({ success: true, data: post });
};
