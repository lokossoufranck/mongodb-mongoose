﻿import mongoose from 'mongoose';
import Blog from './model/Blog.js';

await mongoose.connect("mongodb+srv://user_cluster_1:uwQFgqq1rWZ1tMtm@cluster0.snwbn.mongodb.net/test?retryWrites=true&w=majority")

// Create a new blog post object
const article = new Blog({
  title: 'Awesome Post!',
  slug: 'awesome-post',
  published: true,
  content: 'This is the best post ever',
  tags: ['featured', 'announcement'],
});

// Insert the article in our MongoDB database
await article.save();