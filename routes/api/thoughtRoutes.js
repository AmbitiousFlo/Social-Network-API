const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addThoughtResponse,
  removeThoughtResponse,
} = require('../../controllers/thoughtController');

//http://localhost:3001/api/Thoughts
// /api/Thought
router.route('/').get(getThoughts).post(createThought);

// /api/Thought/:ThoughtId
router
  .route('/:ThoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// /api/Thought/:ThoughtId/response
router.route('/:ThoughtId/responses').post(addThoughtResponse);

// /api/Thought/:ThoughtId/tags/:tagId
router.route('/:ThoughtId/tags/:tagId').delete(removeThoughtResponse);

module.exports = router;
