
const router = require('koa-router')();
const controller = require('./kcontroller.js')

router.get('', controller.getTopics);
router.post('', controller.postTopic);

module.exports = router;


