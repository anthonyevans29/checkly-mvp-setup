import { EmailAlertChannel, defineAlertChannel } from '@checkly/cli';

defineAlertChannel(new EmailAlertChannel('ACME Alerts', {
  addresses: ['teamlead@acme.com'],
}));
