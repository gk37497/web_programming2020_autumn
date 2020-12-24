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

module.exports = router;