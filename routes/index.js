const express = require('express')
const router = express.Router()
const postsController = require('../controllers/postsController')
const reviewsController = require('../controllers/reviewsController')


router.get('/posts', postsController.index)
router.post('/posts', postsController.create)
router.get('/posts/:postId', postsController.show)
router.patch('/posts/:postId', postsController.update)
router.delete('/posts/:postId', postsController.delete)

module.exports = router