const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

//GET BACK ALL THE POSTS
router.get('/', async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
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
  const movie = new Movie({
    title: req.body.title,
    name: req.body.name,
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
    vote_average: req.body.vote_average,
    vote_count: req.body.vote_count,
    number_of_episodes: req.body.number_of_episodes,
    trailer: req.body.trailer,
    logo: req.body.logo,
  });

  try {
    const savePost = await movie.save();
    res.json(savePost);
  } catch (err) {
    res.json({ message: err });
  }
});
// SPECIFIC POST
router.get('/:postId', async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.postId);
    res.json(movie);
  } catch (err) {
    res.json({ message: err });
  }
});

//Delete Post
router.delete('/:postId', async (req, res) => {
  try {
    const removedPost = await Movie.remove({ _id: req.params.potId });
    res.json(removedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

//Update a post
router.patch('/:postId', async (req, res) => {
  try {
    const updatePost = await Movie.updateOne(
      { _id: req.params.potId },
      { $set: { title: req.body.title } }
    );
    res.json(updatePost);
  } catch (err) {
    res.json({ message: err });
  }
});
module.exports = router;
