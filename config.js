module.exports = {
  tierion: {
    client_secret: process.env.TIERION_CLIENT_SECRET,
    username: process.env.TIERION_ACCOUNT_EMAIL,
    password: process.env.TIERION_LOGIN_PASSWORD
  },

  pubnub: {
    ssl: false,
    publish_key: process.env.PUBNUB_PUBLISH_KEY,
    subscribe_key: process.env.PUBNUB_SUBSCRIBE_KEY,
    registered_channel: 'registered_channel',
    confirmed_channel: 'confirmed_channel'
  },

  url: 'https://0cbe6a80.ngrok.io',

  db: 'existence',

  port: process.env.APP_PORT || 3000
};
