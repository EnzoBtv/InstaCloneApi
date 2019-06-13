const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const postController = require('./controllers/PostController');
const likeController = require('./controllers/LikeController');

const router = new express.Router();
const upload = multer(uploadConfig);

router.get('/posts', postController.index);
router.post('/posts', upload.single('image'), postController.store);

router.post('/posts/:id/like', likeController.store);

module.exports = router;