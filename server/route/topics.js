let router = require('koa-router')();
let topicCtrl = require('./../api/topicCtrl.js');

const routers = router
  .post('/addTopic', topicCtrl.addTopic)
  .post('/deleteTopic',topicCtrl.deleteTopic)
  .post('/reeditTopic',topicCtrl.reeditTopic)
  .post('/getTopicsCount',topicCtrl.getTopicsCount)
  .post('/getOneTopicById',topicCtrl.getOneTopicById)
  .post('/getTopicsByPage',topicCtrl.getTopicsByPage)
  // 点赞/踩
  .post('/addLike',topicCtrl.addLike)
  .post('/addUnlike',topicCtrl.addUnlike)
  // 评论和评论回复，回复->回复
  .post('/addComment',topicCtrl.addComment)
  .post('/deleteComment',topicCtrl.deleteComment)
  .post('/addReply',topicCtrl.addReply)
  .post('/deleteReply',topicCtrl.deleteReply)
  
module.exports = routers;
