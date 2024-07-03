/**
* This is a Checkly CLI AlertChannel construct. To learn more, visit:
* - https://www.checklyhq.com/docs/cli/
* - https://www.checklyhq.com/docs/cli/constructs-reference/#alertchannel
*/

import { EmailAlertChannel } from 'checkly/constructs'

export const emailChannel = new EmailAlertChannel('email-221153', {
  address: 'anthony.snc@gmail.com',
  sendRecovery: true,
  sendFailure: true,
  sendDegraded: true,
  sslExpiry: true,
})
