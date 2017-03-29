module.exports = {
  stampery: {
    client_secret: process.env.STAMPERY_SECRET,
    username: 'williamhilton@tuta.io',
    password: process.env.STAMPER_LOGIN_PASSWORD
  },

  pubnub: {
    ssl: false,
    publish_key: process.env.PUBNUB_PUBLISH_KEY,
    subscribe_key: process.env.PUBNUB_SUBSCRIBE_KEY,
    registered_channel: 'registered_channel',
    confirmed_channel: 'confirmed_channel'
  },

  url: 'https://e3919176.ngrok.io',

  db: 'existence',

  port: process.env.APP_PORT || 3000
};
