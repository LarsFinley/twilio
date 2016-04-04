/* eslint-disable no-console */
var config = require('./config');
var twilio = require('twilio')(config.twilio.accountSid, config.twilio.authToken);

twilio.messages.create({
  body: 'hello from Lars!',
  to: config.myPhone,
  from: config.twilio.from,
  mediaUrl: 'http://www.placekitten.com/300/400',
}, function createCb(err, data) {
  if (err) return console.log('error sending message!', err);
  return console.log('sent message', data);
});

