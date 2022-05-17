const emailConfig = {};

emailConfig.host = 'smtp.gmail.com';
emailConfig.port = 587; // secure SMTP;
emailConfig.secure_connection = false; // false for TLS - as a boolean not string
emailConfig.request_auth = true; // false for TLS - as a boolean not string

emailConfig.feedbackMail = ['jayathissaara@gmail.com'];
emailConfig.notificationMail = ['jayathissaara@gmail.com', 'jayathissaara@gmail.com'];
emailConfig.email = 'samanjayalal70@gmail.com';

emailConfig.password = 'samn%^$jaya&^^$;;';
emailConfig.domains = ['gmail.com', 'googlemail.com'];
emailConfig.invoiceAttachmentPath = '';

// email
emailConfig.sendgrid_api_key =
  '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';

module.exports = emailConfig;
