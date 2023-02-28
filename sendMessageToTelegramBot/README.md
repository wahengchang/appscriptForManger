This script is a Google Apps Script that enables users to send messages to a Telegram bot using an HTTP API request. This script allows users to automate the process of sending messages to a Telegram bot, making it easier to communicate with customers or team members.

![image](https://user-images.githubusercontent.com/5538753/221810034-cc4c477f-9b13-4cb8-bfb7-13d65d9f3ebe.png)

To use the script, you must first obtain two keys: `bot API token` and `recipient chat ID`. 
1. The bot API token can be obtained by creating a bot through the `BotFather` on Telegram. 
2. The `chat ID` can be obtained by adding the bot to a group and sending a message to the group. The chat ID can then be retrieved using the Telegram bot API by sending a GET request to the URL https://api.telegram.org/bot<token>/getUpdates. (as the image above)
  
  
## To run the script
1. adding this code in Google Sheet -> extensions -> Appscript
2. Paste the code in editor, save and give permission
3. select the target function and press RUN

![image](https://user-images.githubusercontent.com/5538753/221506476-aa8d9eb9-1dcd-4257-a03d-330199bfc3bd.png)

