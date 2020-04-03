function getEnvironmentVariable (name) {
    if (process.env[name]) {
        return process.env[name];
    } else {
        console.error("Event variable \"" + name + "\" passed. Exiting...");
        process.exit();
    }
}

module.exports = {
    mailchimpAPIKey: getEnvironmentVariable("MAILCHIMP_API_KEY"),
    mailchimpCode: getEnvironmentVariable("MAILCHIMP_CODE")
};