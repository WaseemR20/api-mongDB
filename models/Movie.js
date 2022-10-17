const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
  name: String,
  id: Number,
  trailer: String,
  server: String,
  backdrop_path: String,
  first_air_date: String,
  origin_country: String,
  original_name: String,
  genre_ids: Array,
  original_language: String,
  original_title: String,
  overview: String,
  popularity: Number,
  poster_path: String,
  server1: Array,
  genres: Array,
  release_date: String,
  vote_average: Number,
  play: [ { server1: Array, servers: Array, name: String } ],
  popularity: Number,
  vote_count: Number,
  title: {
    type: String,
    required: true,
  },
  binary: Buffer,
  living: Boolean,
  updated: { type: Date, default: Date.now },
  age: { type: Number, min: 18, max: 65 },
  array: [],
  ofString: [String],
  ofNumber: [Number],
  ofDates: [Date],
  ofBuffer: [Buffer],
  ofBoolean: [Boolean],
  ofArrays: [[]],
  ofArrayOfNumbers: [[Number]],
  nested: {
    stuff: { type: String, lowercase: true, trim: true },
  },
  map: Map,
  mapOfString: {
    type: Map,
    of: String,
  },
});
module.exports = mongoose.model('Movie', PostSchema);