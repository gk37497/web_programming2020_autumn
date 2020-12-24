const router = require('express').Router();
let Title = require('../models/title.model');

router.route('/').get((req, res) => {
  Title.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const title = req.body.title;

  const newUser = new Title({title});

  newUser.save()
    .then(() => res.json('Title added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;