var express = require('express');
var project_controller = require('../controllers/projectController');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send();
});

router.post('/project', project_controller.project_create_post);
router.get('/project/:id', project_controller.project_detail);
router.put('/project/:id', project_controller.update_project);
module.exports = router;
