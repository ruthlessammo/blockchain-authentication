const fs = require('fs');
const url = require('url');
const crypto = require('crypto');
const jsreport = require('jsreport-core')();
const model = require('../models/receipt');
const config = require('../config');

jsreport.use(require('jsreport-wkhtmltopdf')());
jsreport.use(require('jsreport-jsrender')());
jsreport.init();

const receiptTemplate = fs.readFileSync(__dirname + '/../templates/receipt.html', 'utf8');

const validateRequest = function(rawBody, providedSignature) {
  const hmac = crypto.createHmac('sha256', config.tierion.client_secret).update(rawBody, 'utf8');
  const calculatedSignature = hmac.digest('hex');

  return providedSignature === calculatedSignature;
};
