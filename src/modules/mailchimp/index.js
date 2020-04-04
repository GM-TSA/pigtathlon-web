const Mailchimp = require('mailchimp-api-v3');

module.exports = new Mailchimp(require('../../config').mailchimpAPIKey);