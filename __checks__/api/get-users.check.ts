import { ApiCheck, defineCheck } from '@checkly/cli';

defineCheck(new ApiCheck('Check GET /users', {
  name: 'Check GET /users',
  url: 'https://api.acme.com/users',
  assertions: [
    { type: 'STATUS_CODE', comparison: 'EQUALS', target: 200 },
    { type: 'JSON_PATH', comparison: 'EQUALS', jsonPath: '$.length', target: 10 },
  ],
}));
