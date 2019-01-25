const express = require('express')
const router = express.Router()
const postsController = require('../controllers/postsController')
const reviewsController = require('../controllers/reviewsController')


router.get('/posts', postsController.index)
router.post('/api/posts', postsController.create)
router.get('/posts/:postId', postsController.show)
router.patch('/posts/:postId', postsController.update)
router.delete('/posts/:postId', postsController.delete)

router.get('/review', reviewsController.index)
router.post('/review', reviewsController.create)
router.delete('/review/:id', reviewsController.delete)


module.exports = router