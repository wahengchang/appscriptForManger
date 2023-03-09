function sendEmails() {
  // below is the code that executing this function by given sheet name
  //   const ss = SpreadsheetApp.getActiveSpreadsheet();
  //   const sheet = ss.getSheetByName('clients');
  
  // below is the sheet that is currently triggered by a button inside the sheet
  var sheet = SpreadsheetApp.getActiveSheet();
  var dataRange = sheet.getDataRange();
  var data = dataRange.getValues();

  for (var i = 1; i < data.length; i++) {
    var recipient = data[i][0];
    var subject = data[i][2];
    var body = data[i][3];
    var status = data[i][4];
    
    if (status !== "sent" && status !== "completed") {
      GmailApp.sendEmail(recipient, subject, body);
      sheet.getRange(i + 1, 5).setValue("sent"); // Update status column
    }
  }
}
