import { ApiCheck, defineCheck } from '@checkly/cli';

defineCheck(new ApiCheck('Check DELETE /photos/{id}', {
  name: 'Check DELETE /photos/{id}',
  url: 'https://api.acme.com/photos/1',
  method: 'DELETE',
  assertions: [
    { type: 'STATUS_CODE', comparison: 'EQUALS', target: 200 },
    { type: 'HEADER', comparison: 'EQUALS', key: 'X-Ratelimit-Limit', target: '1000' },
  ],
}));
