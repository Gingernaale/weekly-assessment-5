const mongoose = require('mongoose');
const topicModel = mongoose.Schema({
    topic : string,
    // date : string;
    vote : number
})

exports.getTopics = () => {
  return topicModel.find({}, (err) => {
		if (err) throw err;
	});

exports.postTopic = function (data) {
  const topic = topic.topic;
  let vote = topic.vote;
  return topicModel.create({
    topic : string,
    // date : string;
    vote : number
  })
};
