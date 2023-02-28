const TG_TOKEN = '123xxx:xxxxx'
const TG_CHATID = '12345678'

// this is the trigger function
function myFunction() {
  sendMessage('Message to chat on telegram')
}

function sendMessage(text) {
  var data = {
    method: "post",
    payload: {
      method: "sendMessage",
      chat_id: TG_CHATID,
      text: text,
      parse_mode: "HTML",

    }
  };
  UrlFetchApp.fetch('https://api.telegram.org/bot' + TG_TOKEN + '/', data);
}
