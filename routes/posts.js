const express = require('express');
const Post = require('../models/Post');
const auth = require('../middleware/auth');

const router = express.Router();

// Create Post
router.post('/', auth, async (req, res) => {
    const { title, content } = req.body;
    const post = new Post({ title, content, author: req.user.id });
    await post.save();
    res.status(201).json(post);
});

// Get all Posts
router.get('/', async (req, res) => {
    const posts = await Post.find().populate('author', 'username');
    res.json(posts);
});

module.exports = router;
