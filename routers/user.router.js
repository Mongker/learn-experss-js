var express = require('express');
var router = express.Router();

const bodyParser = require('body-parser');
const controller = require('../controllers/user.controllers');
router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// render
router.get('/', controller.index);

/**
 * Gửi một chức năng tìm kiếm 
 */
router.get('/search', controller.searchRender);

/**
 * Chức năng thêm 
 */
router.get('/create', controller.createRender)
router.post('/create', controller.createRender)

/**
 * Lấy id của đường dẫn 
 */
router.get('/:id', controller.viewRender);


module.exports = router;