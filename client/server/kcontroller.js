
const model = require('./kmodel.js');

exports.getTopics = async (ctx) => {
  try {
    //const message = await model.getDb();
    ctx.body = JSON.stringify(topic);
    ctx.status = 200;
  } catch (err) {
    console.log(err); // eslint-disable-line no-console
  }
}

exports.postTopic = async (ctx) => {
  try {
    await model.postTopic(ctx.request.body);
  } catch (err) {
    console.log(err); // eslint-disable-line no-console
  }
}

