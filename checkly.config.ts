import { defineConfig } from 'checkly';
import { Frequency } from 'checkly/constructs';
import './src/__checks__/alert-channels';
import './src/__checks__/api/get-users.check';
import './src/__checks__/api/delete-photos.check';
import './src/__checks__/browser/homepage-sponsors.spec';

export default defineConfig({
  projectName: 'checkly-mvp-setup',
  logicalId: 'checkly-mvp-setup-1',
  repoUrl: 'https://github.com/anthonyevans29/checkly-mvp-setup',
  checks: {
    activated: true,
    muted: false,
    runtimeId: '2022.10',
    frequency: Frequency.EVERY_5M,
    locations: ['us-east-1', 'eu-west-1'],
    tags: ['api', 'homepage'],
    checkMatch: '**/__checks__/**/*.check.ts',
    ignoreDirectoriesMatch: [],
    browserChecks: {
      frequency: Frequency.EVERY_10M,
      testMatch: '**/__checks__/**/*.spec.ts',
    },
  },
  cli: {
    runLocation: 'eu-west-1',
  }
});
