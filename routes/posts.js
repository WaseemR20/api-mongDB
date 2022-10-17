const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//GET BACK ALL THE POSTS
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

// router.get('/sp', (req, res) => {
//   res.send('Wesp');
// });
//SUBMITS A POST
router.post('/', async (req, res) => {
  console.log(req.body);
  const post = new Post({
    title: req.body.title,
    name: req.body.name,
    id: req.body.id,
  });

  try {
    const savePost = await post.save();
    res.json(savePost);
  } catch (err) {
    res.json({ message: err });
  }
});
// SPECIFIC POST
router.get('/:postId', async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

//Delete Post
router.delete('/:potId', async (req, res) => {
  try {
    const removedPost = await Post.remove({ _id: req.params.potId });
    res.json(removedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

//Update a post
router.patch('/:potId', async (req, res) => {
  try {
    const updatePost = await Post.updateOne(
      { _id: req.params.potId },
      { $set: { title: req.body.title } }
    );
    res.json(updatePost);
  } catch (err) {
    res.json({ message: err });
  }
});
module.exports = router;
