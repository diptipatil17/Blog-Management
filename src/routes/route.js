const express = require('express');

const router = express.Router();
const blogController = require("../controllers/blogController")
const authorController = require("../controllers/authorController")
const loginController = require("../controllers/loginController")
const middleWare = require("../middlewares/middleWare")



router.post('/createAuthor', authorController.createAuthor);

router.post('/login', loginController.login);

router.post('/createBlogs', middleWare.auth, blogController.createBlogs);

router.get('/getBlogs',blogController.getBlogs);

router.put('/updateBlog/:blogId', middleWare.auth, blogController.updateBlogs);

router.delete('/blogs/:blogId', middleWare.auth, blogController.deleteBlogByid);

router.delete('/blogs', middleWare.auth, blogController.deleteBlogByQuerConditoin);



module.exports = router;