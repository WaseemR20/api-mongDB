const express = require('express');
const router = express.Router();
const Tv = require('../models/Tv');

//GET BACK ALL THE POSTS
router.get('/', async (req, res) => {
  try {
    const tves = await Tv.find();
    res.json(tves);
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
  const tv = new Tv({
    title: req.body.title,
    name: req.body.name,
    jasdlk: req.body.jasdlk,
    genres: req.body.genres,
    genre_ids: req.body.genre_ids,
    play: req.body.play,
    adult: req.body.adult,
    id: req.body.id,
    backdrop_path: req.body.backdrop_path,
    first_air_date: req.body.first_air_date,
    genre_ids: req.body.genre_ids,
    origin_country: req.body.origin_country,
    original_language: req.body.original_language,
    original_name: req.body.original_name,
    original_title: req.body.original_title,
    overview: req.body.overview,
    popularity: req.body.popularity,
    poster_path: req.body.poster_path,
    release_date: req.body.release_date,
    vote_average: req.body.vote_average,
    vote_count: req.body.vote_count,
    number_of_episodes: req.body.number_of_episodes,
    trailer: req.body.trailer,
    logo: req.body.logo,
  });

  try {
    const savePost = await tv.save();
    res.json(savePost);
  } catch (err) {
    res.json({ message: err });
  }
});
// SPECIFIC POST
router.get('/:postId', async (req, res) => {
  try {
    const tv = await Tv.findById(req.params.postId);
    res.json(tv);
  } catch (err) {
    res.json({ message: err });
  }
});

//Delete Post
router.delete('/:postId', async (req, res) => {
  try {
    const removedPost = await Tv.remove({ _id: req.params.potId });
    res.json(removedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

//Update a post
router.patch('/:postId', async (req, res) => {
  try {
    const updatePost = await Tv.updateOne(
      { _id: req.params.potId },
      { $set: { title: req.body.title } }
    );
    res.json(updatePost);
  } catch (err) {
    res.json({ message: err });
  }
});
module.exports = router;
