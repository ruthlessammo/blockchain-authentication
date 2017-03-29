module.exports = {
  stampery: {
    client_secret: process.env.STAMPERY_SECRET,
    username: 'xxxxxx@xxxxxx.com',
    password: 'xxxxxxxxxx'
  },

  pubnub: {
    ssl: false,
    publish_key: 'pub-c-xxxxx-xxx-xxxx-xxxx-xxxx',
    subscribe_key: 'sub-c-xxxxxx-xxxx-xxx-xxxx-xxx',
    registered_channel: 'registered_channel',
    confirmed_channel: 'confirmed_channel'
  },

  url: 'http://xxxxxxxx.ngrok.io',

  db: 'existence',

  port: process.env.APP_PORT || 3000
};
