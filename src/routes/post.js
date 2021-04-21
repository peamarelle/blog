const { Router } = require('express');
const router = Router();
const {
    findPosts,
    findPostById,
    savePost,
    updatePost,
    deletePost } = require('../controllers/post');

router.get('/', findPosts);

router.get('/:id', findPostById);

router.post('/', savePost);

router.patch('/:id', updatePost);

router.delete('/:id', deletePost);

module.exports = router;