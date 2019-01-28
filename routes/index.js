const express = require('express')
const router = express.Router()
const postsController = require('../controllers/postsController')
const reviewsController = require('../controllers/reviewsController')


router.get('/api/posts', postsController.index)
router.post('/api/posts', postsController.create)
router.get('/api/posts/:postId', postsController.show)
router.patch('/api/posts/:postId', postsController.update)
router.delete('/api/posts/:postId', postsController.delete)

router.get('/api/reviews', reviewsController.index)
router.post('/api/reviews', reviewsController.create)
router.delete('/api/reviews/:id', reviewsController.delete)


module.exports = router