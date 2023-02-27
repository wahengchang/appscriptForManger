// there is a html file on Appscript, called 'sample', with two embed slots for parameters: {{name}} and {{currentDate}}

// sendEmail is the trigger function
function sendEmail(toEmail, subject, name, currentDate) {
  const html = getHtmlFromDocId(name, currentDate)
  MailApp.sendEmail({
    to: toEmail,
    subject,
    htmlBody: html,
  });
}

function getHtmlFromDocId(name, currentDate) {
  var htmlBody  = HtmlService.createHtmlOutputFromFile('sample').getContent()
  htmlBody = htmlBody.replace('{{name}}', name)
  htmlBody = htmlBody.replace('{{currentDate}}', currentDate)
  return htmlBody
}
