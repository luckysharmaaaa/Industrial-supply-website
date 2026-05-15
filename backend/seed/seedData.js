import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Product from '../models/Product.js';
import BlogPost from '../models/BlogPost.js';
import { productsData, blogData } from './initialData.js';

dotenv.config();

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB Atlas for seeding...');

    await Product.deleteMany();
    await BlogPost.deleteMany();

    const products = await Product.insertMany(productsData);
    const blogs = await BlogPost.insertMany(blogData);

    console.log(`Seeded ${products.length} products`);
    console.log(`Seeded ${blogs.length} blog posts`);
    console.log('Database seeded successfully!');

    process.exit(0);
  } catch (error) {
    console.error('Seed error:', error.message);
    process.exit(1);
  }
};

seedDatabase();
