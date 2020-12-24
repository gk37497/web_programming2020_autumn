const router = require('express').Router();
let Bookreview = require('../models/bookReview.model');

router.route('/').get((req, res) =>
{
    Bookreview.find()
        .then(reviews => res.json(reviews))
        .catch(err => res.status(400).json('Error : ' + err));
});

router.route('/add').post((req, res) =>
{
    const title = req.body.title;
    const category = req.body.category;
    const author = req.body.author;
    const rating = Number(req.body.rating);
    const review = req.body.review;
    const date = Date.parse(req.body.date);

    const newBookreview = new Bookreview({
        title,
        category,
        author,
        rating,
        review,
        date
    });
    newBookreview.save()
        .then(() => res.json('Review added!!!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Bookreview.findByIdAndDelete(req.params.id)
      .then(() => res.json('Review deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').get((req, res) => {
    Bookreview.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/update/:id').post((req, res) => {
    Bookreview.findById(req.params.id)
      .then(review => {
        review.title = req.body.title;
        review.category = req.body.category;
        review.author = req.body.author;
        review.rating = Number(req.body.rating);
        review.review = req.body.review;
        review.date = Date.parse(req.body.date);
  
        review.save()
          .then(() => res.json('Review updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });


module.exports = router;