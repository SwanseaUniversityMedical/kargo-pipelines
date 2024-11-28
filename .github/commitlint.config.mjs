import { RuleConfigSeverity } from '@commitlint/types';

export default {
  extends: ['@commitlint/config-conventional'],
  parserPreset: 'conventional-changelog-conventionalcommits',
  rules: {
    'scope-enum': [RuleConfigSeverity.Error, 'always', [
        '',
        'ci',
        'deps',
        'kargo-pipelines',
        'kargo-pipelines-chart',
    ]],
    'subject-case': [RuleConfigSeverity.Error, 'never', []],
  }
};
