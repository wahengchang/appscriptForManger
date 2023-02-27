const nameCol = 0
const emailCol = 1

// main function triggerClientEmailProcess
// there is a sheet called "clients"
// name | email
// peter | peter@gmail.com
// sam | sam@gmail.com

function triggerClientEmailProcess(e) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const masterSheet = ss.getSheetByName('clients');
  const rows = masterSheet.getRange(
    2,                //2rd row
    1,
    masterSheet.getLastRow() - 1,//last row
    masterSheet.getLastColumn()
  ).getValues()
  rows.forEach(item => {
    const name = item[nameCol]
    const email = item[emailCol]
    const currentDate = (new Date()).toLocaleDateString("en-US")
    console.log(`going to send email to ${name}`)
    sendEmail(
      email,
      `Hi, ${name}, ${currentDate}`,
      `Hi, you’ve reached ${name}. I can’t get to the phone right now, but if you need to speak with someone immediately, contact my assistant, ${name} at ${email}. Otherwise, leave your name, number and message and I’ll get back to you as soon as I can.
      Thank You
      Samon Oliver
      ${currentDate}`
    )
    console.log(`email is sent to ${name}`)
  })
}

function sendEmail(toEmail, subject, body) {
  MailApp.sendEmail({
    to: toEmail,
    subject,
    body
  });
}
