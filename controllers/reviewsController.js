const Review = require('../models/Review')

const reviewsController = {
    index: (req, res) => {
        Review.find({})
            .then((reviews) => {
                res.send(reviews)
            })
    },
    create: (req, res) => {
        Review.create(req.body)
            .then((review) => {
                res.send(review)
            })
    },
    delete: (req, res) => {
        Post.findByIdAndDelete(req.params.postId)
            .then(() => {
                res.send(200)
            })
    }
}

module.exports = reviewsController
