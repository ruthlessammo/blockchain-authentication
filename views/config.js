module.exports = {
  tierion: {
    client_secret: process.env.TIERION_CLIENT_SECRET,
    username: 'williamhilton@tuta.io',
    password: process.env.TIERION_LOGIN_PASSWORD
  },

  pubnub: {
    ssl: false,
    publish_key: process.env.PUBNUB_PUBLISH_KEY,
    subscribe_key: process.env.PUBNUB_SUBSCRIBE_KEY,
    registered_channel: 'registered_channel',
    confirmed_channel: 'confirmed_channel'
  },

  url: 'https://b6957661.ngrok.io',

  db: 'existence',

  port: process.env.APP_PORT || 3000
};
