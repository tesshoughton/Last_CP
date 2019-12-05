const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();

//
// Stories
//

const storySchema = new mongoose.Schema({
  name: String,
  problem: String,
});

const Story = mongoose.model('Story', storySchema);

router.get('/', async (req, res) => {
  try {
    let stories = await Story.find();
    return res.send(stories);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

router.post('/', async (req, res) => {
  const story = new Story({
    name: req.body.name,
    problem: req.body.problem
  });
  try {
    await story.save();
    return res.send(story);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Story.deleteOne({
      _id: req.params.id
    });
    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

module.exports = router;