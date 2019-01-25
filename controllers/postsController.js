const Post = require('../models/Post')

const postsController = {
    index: (req, res) => {
        Post.find({})
            .then((posts)=>{
                res.send(posts)
            })
    },
    create: (req, res) => {
        Post.create(req.body)
            .then((post) => {
                res.send(post)
            })
    },    
    show: (req, res) => {
        Post.findById(req.params.postId).populate('posts')
            .then((post) => {
                res.send(post)
            })
    },
    update: (req, res) => {
        Post.findByIdAndUpdate(req.params.postId, req.body)
            .then((updatedPost) => {
                updatedPost.save()
                res.send(updatedPost)
            })
    },
    delete: (req, res) => {
        Post.findByIdAndDelete(req.params.postId)
            .then(() => {
                res.send(200)
            })
    },

}


module.exports = postsController